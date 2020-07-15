import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/auth'
import plansReducer from './reducers/plans'
import priceDDDReducer from './reducers/priceDDD'

export default configureStore({
	reducer: {
		auth: authReducer,
		plans: plansReducer,
		priceDDD: priceDDDReducer,
	},
})
