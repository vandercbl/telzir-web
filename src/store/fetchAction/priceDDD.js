import api from '../../services/api'
import { listPriceDDD, listOriginDDD } from '../reducers/priceDDD'

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
