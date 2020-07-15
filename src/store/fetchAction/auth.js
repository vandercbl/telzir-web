import api from '../../services/api'
import { login, logout } from '../reducers/auth'

// Login
export const loginFetch = (formLogin) => (dispatch) => {
	return new Promise((resolve, reject) => {
		api
			.post('/users/authenticate', {
				email: formLogin.login,
				password: formLogin.password,
			})
			.then((response) => {
				const data = response.data
				localStorage.setItem('@Telzir:token', data.token)

				dispatch(login(data))
				resolve(data)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

// Logout
export const logoutFetch = (formLogout) => (dispatch) => {
	localStorage.removeItem('@Telzir:token')
	dispatch(logout())
}
