import React, { useCallback, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import Header from './../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Table from '../../components/Table'

import simulator from '../../utils/simulator'
import { formatValue } from '../../utils/formatValue'

// import codesDDD from '../../store/codes-ddd'
import priceDDD from '../../store/price-ddd'
import plans from '../../store/plans'

import { PageComparePlan, ResultSimulator } from './styles'

function ComparePlan() {
	const resumeOrigin = priceDDD.reduce(function (allCodes, code) {
		if (!allCodes.includes(code.origin)) {
			allCodes.push(code.origin)
		}
		return allCodes
	}, [])

	const [resultSimulator, setResultSimulator] = useState({})
	const [originOptions] = useState(resumeOrigin)
	const [destinyOptions, setDestinyOptions] = useState([])

	const formInitialValues = {
		origin: '',
		destiny: '',
		minutes: '',
		plan: '',
	}

	const schemaSimulator = yup.object().shape({
		origin: yup
			.string()
			.notOneOf([yup.ref('destiny')], 'DDDs não podem ser iguais')
			.required('Origem obrigatório'),
		destiny: yup
			.string()
			.notOneOf([yup.ref('origin')], 'DDDs não podem ser iguais')
			.required('Destino obrigatório'),
		minutes: yup
			.number()
			.typeError('Digite apenas números')
			.integer('Apenas números inteiros')
			.required('Minutos obrigatório'),
		plan: yup.string().required('Plano obrigatório'),
	})

	const handlSubmit = useCallback(({ origin, destiny, minutes, plan }) => {
		setResultSimulator(simulator(origin, destiny, minutes, plan))
	}, [])

	const handleOrigin = useCallback((e, Formik) => {
		const selectedOrigin = e.target.value
		Formik.setFieldValue(e.target.name, selectedOrigin)
		const listDestiny = priceDDD.filter(
			(item) => item.origin === selectedOrigin,
		)
		setDestinyOptions(listDestiny)
	}, [])

	return (
		<>
			<Header />
			<Banner>
				<h3>Faça uma simulação e veja qual plano é melhor para você</h3>
			</Banner>
			<PageComparePlan>
				<div className="container">
					<h2>Simulador</h2>
					<p>
						Preencha os campos abaixo para simular os gastos de acordo com o
						plano escolhido.
					</p>
					<Formik
						initialValues={formInitialValues}
						onSubmit={handlSubmit}
						validationSchema={schemaSimulator}
					>
						{(Formik) => {
							return (
								<>
									<Form className="formSimulator">
										<div className="field">
											<label>Origem</label>
											<Field
												as="select"
												name="origin"
												onChange={(e) => handleOrigin(e, Formik)}
											>
												<option value=""></option>
												{originOptions.map((ddd) => (
													<option key={ddd} value={ddd}>
														{ddd}
													</option>
												))}
												{/* {codesDDD.map((ddd) => (
													<option key={ddd.id} value={ddd.code}>
														{ddd.code}
													</option>
												))} */}
											</Field>
											<ErrorMessage name="origin" component="span" />
										</div>

										<div className="field">
											<label>Destino</label>
											<Field as="select" name="destiny">
												<option value=""></option>
												{destinyOptions.map((item) => (
													<option key={item.destiny}>{item.destiny}</option>
												))}
											</Field>
											<ErrorMessage name="destiny" component="span" />
										</div>

										<div className="field">
											<label>Minutos</label>
											<Field type="text" name="minutes" />
											<ErrorMessage name="minutes" component="span" />
										</div>

										<div className="field">
											<label>Plano</label>
											<Field as="select" name="plan">
												<option value=""></option>
												{plans.map((plan) => (
													<option key={plan.id} value={plan.name}>
														{plan.name}
													</option>
												))}
											</Field>
											<ErrorMessage name="plan" component="span" />
										</div>

										<button type="submit">Simular</button>
									</Form>

									{Formik.isSubmitting && (
										<ResultSimulator>
											<Table>
												<thead>
													<tr>
														<th>Origem</th>
														<th>Destino</th>
														<th>Tempo</th>
														<th>Plano</th>
														<th>Com FaleMais</th>
														<th>Sem FaleMais</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>{resultSimulator.origin}</td>
														<td>{resultSimulator.destiny}</td>
														<td>{resultSimulator.minutesCall}</td>
														<td>{resultSimulator.plan}</td>
														<td>
															{formatValue(resultSimulator.totalWithPlan)}
														</td>
														<td>
															{formatValue(resultSimulator.totalWithoutPlan)}
														</td>
													</tr>
												</tbody>
											</Table>
										</ResultSimulator>
									)}
								</>
							)
						}}
					</Formik>
				</div>
			</PageComparePlan>
			<Footer />
		</>
	)
}

export default ComparePlan
