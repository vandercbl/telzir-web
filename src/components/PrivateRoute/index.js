import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authorized = useSelector((state) => state.auth.token)

	return (
		<Route
			{...rest}
			render={(props) =>
				authorized ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: props.location } }}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute
