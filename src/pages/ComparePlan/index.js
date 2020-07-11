import React, { useCallback } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import Header from './../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import codesDDD from '../../store/codes-ddd'
import plans from '../../store/plans'

import { PageComparePlan } from './styles'

function ComparePlan() {
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

	const handlSubmit = useCallback((values) => {
		console.log('submit form')
		console.log(values)
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
								<Form className="formSimulator">
									<div className="field">
										<label>Origem</label>
										<Field as="select" name="origin">
											<option value=""></option>
											{codesDDD.map((ddd) => (
												<option key={ddd.id}>{ddd.code}</option>
											))}
										</Field>
										<ErrorMessage name="origin" component="span" />
									</div>

									<div className="field">
										<label>Destino</label>
										<Field as="select" name="destiny">
											<option value=""></option>
											{codesDDD.map((ddd) => (
												<option key={ddd.id}>{ddd.code}</option>
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
												<option key={plan.id}>{plan.name}</option>
											))}
										</Field>
										<ErrorMessage name="plan" component="span" />
									</div>

									<button type="submit">Simular</button>
								</Form>
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
