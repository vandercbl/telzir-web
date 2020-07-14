import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	list: [
		{
			id: '',
			origin: '',
			destiny: '',
			price: '',
		},
	],
	originDDDs: [],
}

export const listPriceDDD = createAction('LIST_PRICEDDD')
export const listOriginDDD = createAction('LIST_ORIGINDDD')

export default createReducer(INITIAL_STATE, {
	[listPriceDDD]: (state, action) => {
		state.list = action.payload
	},
	[listOriginDDD]: (state, action) => {
		state.originDDDs = action.payload
	},
})
