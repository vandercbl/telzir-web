import api from '../../services/api'
import {
	listPriceDDD,
	listOriginDDD,
	addPriceDDD,
	addPriceDDDError,
	deletePriceDDD,
} from '../reducers/priceDDD'

export const getListPriceDDDFetch = () => async (dispatch) => {
	const priceDDD = await api
		.get('/prices-ddd')
		.then((response) => response.data)
		.catch((err) => console.log(err))

	dispatch(listPriceDDD(priceDDD))
}

export const getListOriginDDDFetch = () => async (dispatch) => {
	const priceDDD = await api
		.get('/prices-ddd')
		.then((response) => response.data)
		.catch((err) => console.log(err))

	const originDDDs = priceDDD.reduce(function (allCodes, code) {
		if (!allCodes.includes(code.origin)) {
			allCodes.push(code.origin)
		}
		return allCodes
	}, [])

	dispatch(listOriginDDD(originDDDs))
}

export const addPriceDDDFetch = (formData) => {
	return async function (dispatch) {
		try {
			const priceDDD = await api.post('/prices-ddd', {
				origin: formData.origin,
				destiny: formData.destiny,
				price: formData.price,
			})
			dispatch(addPriceDDD(priceDDD.data))
		} catch (error) {
			dispatch(addPriceDDDError(error.response.data))
		}
	}
}

export const deletePriceDDDFetch = (id) => {
	return async function (dispatch) {
		try {
			await api.delete(`/prices-ddd/${id}`)
			dispatch(deletePriceDDD(id))
		} catch (error) {
			console.log(error.response.data)
		}
	}
}
