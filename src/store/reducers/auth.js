import { createAction, createReducer } from '@reduxjs/toolkit'
import api from '../../services/api'

const INITIAL_STATE = {
	token: localStorage.getItem('@Telzir:token'),
}

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT')

export default createReducer(INITIAL_STATE, {
	[login]: (state, { payload }) => {
		state.token = payload.token
		// api.defaults.headers.common = {
		// 	Authorization: `Bearer ${payload.token}`,
		// }
		api.defaults.headers.common.Authorization = `Bearer ${payload.token}`
	},

	[logout]: (state, action) => {
		state.token = ''
	},
})
