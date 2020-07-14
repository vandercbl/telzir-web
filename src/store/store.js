import { configureStore } from '@reduxjs/toolkit'

import plansReducer from './reducers/plans'
import priceDDDReducer from './reducers/priceDDD'

export default configureStore({
	reducer: {
		plans: plansReducer,
		priceDDD: priceDDDReducer,
	},
})
