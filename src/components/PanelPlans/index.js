import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getListPlansFetch } from '../../store/fetchAction/plans'

import Table from '../Table'
import { PagePanelPlans, ListPlans } from './styles'

function PanelPlans() {
	const dispatch = useDispatch()
	const plans = useSelector((state) => state.plans.list)

	useEffect(() => {
		dispatch(getListPlansFetch())
	}, [dispatch])

	return (
		<PagePanelPlans>
			<h1>Planos</h1>
			<ListPlans>
				<Table>
					<thead>
						<tr>
							<th>Plano</th>
							<th>Minutos</th>
						</tr>
					</thead>
					<tbody>
						{plans.map((item, index) => (
							<tr key={item._id + index}>
								<td>{item.name}</td>
								<td>{item.minutes}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</ListPlans>
		</PagePanelPlans>
	)
}

export default PanelPlans
