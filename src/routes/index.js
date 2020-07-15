import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'
import Home from '../pages/Home'
import ComparePlan from '../pages/ComparePlan'
import Login from '../pages/Login'
import DashboardAdmin from '../pages/DashboardAdmin'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/simulacao" component={ComparePlan}></Route>
				<Route path="/login" component={Login}></Route>
				<PrivateRoute
					path="/dashboard-admin"
					component={DashboardAdmin}
				></PrivateRoute>
			</Switch>
		</BrowserRouter>
	)
}
