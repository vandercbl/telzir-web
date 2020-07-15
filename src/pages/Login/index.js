import React, { useEffect, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import { PageLogin, BoxLogin } from './styles'

import { loginFetch } from '../../store/fetchAction/auth'

function Login() {
	const dispatch = useDispatch()
	const history = useHistory()
	const authorized = useSelector((state) => state.auth.token)

	const [message, setMessage] = useState('')

	const formInitialValues = {
		login: '',
		password: '',
	}

	const schemaLogin = yup.object().shape({
		login: yup
			.string()
			.email('Digite um e-mail válido')
			.required('E-mail obrigatório'),
		password: yup
			.string()
			.min(6, 'Mínimo de 6 dígitos')
			.required('Senha obrigatória'),
	})

	useEffect(() => {
		if (authorized) {
			history.push('/dashboard-admin')
		}
	}, [authorized, history])

	const handlSubmit = useCallback(
		(values) => {
			dispatch(loginFetch(values))
				.then((response) => {
					history.push('/dashboard-admin')
				})
				.catch((error) => {
					console.log(error)
					setMessage('Usuário não autorizado')
				})
		},
		[dispatch, history],
	)

	return (
		<PageLogin className="container">
			<BoxLogin>
				<h1>Área Administrativa</h1>

				<Formik
					initialValues={formInitialValues}
					onSubmit={handlSubmit}
					validationSchema={schemaLogin}
				>
					{(Formik) => {
						return (
							<>
								<Form className="formSimulator">
									<div className="field">
										<label>Login</label>
										<Field type="text" name="login"/>
										<ErrorMessage name="login" component="span" />
									</div>
									<div className="field">
										<label>Senha</label>
										<Field type="password" name="password" />
										<ErrorMessage name="password" component="span" />
									</div>
									{message && <p className="status">{message}</p>}
									<button type="submit">Simular</button>
								</Form>
							</>
						)
					}}
				</Formik>
			</BoxLogin>
		</PageLogin>
	)
}

export default Login
