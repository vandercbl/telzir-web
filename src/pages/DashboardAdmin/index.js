import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { FiLogOut } from 'react-icons/fi'

import { logoutFetch } from '../../store/fetchAction/auth'
import PanelPlans from '../../components/PanelPlans'
import PanelPrices from '../../components/PanelPrices'

import { PageDashboardAdmin } from './styles'

function DashboardAdmin() {
	const dispatch = useDispatch()

	const handleLogout = useCallback(() => {
		dispatch(logoutFetch())
	}, [dispatch])
	return (
		<PageDashboardAdmin className="container">
			<h1>
				Painel de Controle{' '}
				<i onClick={handleLogout}>
					<FiLogOut /> Logout
				</i>
			</h1>
			<div className="panels">
				<PanelPlans />
				<PanelPrices />
			</div>
		</PageDashboardAdmin>
	)
}

export default DashboardAdmin
