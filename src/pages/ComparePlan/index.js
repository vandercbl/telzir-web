import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import Header from './../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Table from '../../components/Table'

import simulator from '../../utils/simulator'
import { formatValue } from '../../utils/formatValue'

import { getListPlansFetch } from '../../store/fetchAction/plans'
import {
	getListPriceDDDFetch,
	getListOriginDDDFetch,
} from '../../store/fetchAction/priceDDD'
// import priceDDD from '../../fake-data/price-ddd'
// import plans from '../../fake-data/plans'

import { PageComparePlan, ResultSimulator } from './styles'

function ComparePlan() {
	const dispatch = useDispatch()
	const plans = useSelector((state) => state.plans.list)
	const priceDDD = useSelector((state) => state.priceDDD.list)
	const originOptions = useSelector((state) => state.priceDDD.originDDDs)

	const [resultSimulator, setResultSimulator] = useState({})
	const [destinyOptions, setDestinyOptions] = useState([])

	useEffect(() => {
		dispatch(getListPlansFetch())
		dispatch(getListPriceDDDFetch())
		dispatch(getListOriginDDDFetch())
	}, [dispatch])

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

	const handleOrigin = useCallback(
		(e, Formik) => {
			const selectedOrigin = e.target.value
			Formik.setFieldValue(e.target.name, selectedOrigin)
			const listDestiny = priceDDD.filter(
				(item) => item.origin === selectedOrigin,
			)
			setDestinyOptions(listDestiny)
		},
		[priceDDD],
	)

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
												{originOptions.map((ddd, index) => (
													<option key={ddd + index} value={ddd}>
														{ddd}
													</option>
												))}
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
												{plans.map((plan, index) => (
													<option key={plan._id + index} value={plan.name}>
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
