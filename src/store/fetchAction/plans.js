import api from '../../services/api'
import { listPlans } from '../reducers/plans'

export const getListPlansFetch = () => async (dispatch) => {
	const plans = await api
		.get('/plans')
		.then((response) => response.data)
		.catch((err) => console.log(err))

	dispatch(listPlans(plans))
}
