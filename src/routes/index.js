import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import ComparePlan from '../pages/ComparePlan'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/comparacao-planos" component={ComparePlan}></Route>
			</Switch>
		</BrowserRouter>
	)
}
