import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	list: [
		{
			id: '',
			name: '',
			minutes: '',
			description: '',
		},
	],
}

export const listPlans = createAction('LIST_PLANS')

export default createReducer(INITIAL_STATE, {
	[listPlans]: (state, action) => {
		state.list = action.payload
	},
})
