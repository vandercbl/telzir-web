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
	messageRequest: '',
}

export const listPriceDDD = createAction('LIST_PRICEDDD')
export const listOriginDDD = createAction('LIST_ORIGINDDD')
export const addPriceDDD = createAction('ADD_PRICEDDD')
export const addPriceDDDError = createAction('ADD_PRICEDDD_ERROR')
export const deletePriceDDD = createAction('DELETE_PRICEDDD')

export default createReducer(INITIAL_STATE, {
	[listPriceDDD]: (state, action) => {
		state.list = action.payload
	},
	[listOriginDDD]: (state, action) => {
		state.originDDDs = action.payload
	},
	[addPriceDDD]: (state, action) => {
		state.list = [...state.list, action.payload]
		state.messageRequest = 'Incluído com sucesso'
	},
	[addPriceDDDError]: (state, action) => {
		state.messageRequest = action.payload
	},
	[deletePriceDDD]: (state, action) => {
		state.list = state.list.filter((item) => item.id !== action.payload)
	},
})
