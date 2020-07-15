import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from './../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Table from '../../components/Table'

import { formatValue } from '../../utils/formatValue'

import { getListPlansFetch } from '../../store/fetchAction/plans'
import { getListPriceDDDFetch } from '../../store/fetchAction/priceDDD'

import { PageHome, CardPlan } from './styles'

function Home() {
	const dispatch = useDispatch()
	const plans = useSelector((state) => state.plans.list)
	const priceDDD = useSelector((state) => state.priceDDD.list)

	useEffect(() => {
		dispatch(getListPlansFetch())
		dispatch(getListPriceDDDFetch())
	}, [dispatch])

	return (
		<>
			<Header />
			<Banner>
				<h3>Especialistas em chamadas de longa distância nacional</h3>
				<Link to="/simulacao">
					<button type="button">Simular Planos</button>
				</Link>
			</Banner>
			<PageHome>
				<div className="container">
					<h2>Nossos Planos</h2>
					<section className="plans">
						{plans.map((plan) => (
							<CardPlan key={plan._id + plan.name}>
								<h3>{plan.name}</h3>
								<p>{plan.description}</p>
								<button>Assine já</button>
							</CardPlan>
						))}
					</section>

					<h2>Custos para ligações DDD</h2>
					<Table>
						<thead>
							<tr>
								<th>Origem</th>
								<th>Destino</th>
								<th>$/min</th>
							</tr>
						</thead>
						<tbody>
							{priceDDD.map((ddd, index) => (
								<tr key={ddd._id + index}>
									<td>{ddd.origin}</td>
									<td>{ddd.destiny}</td>
									<td>{formatValue(ddd.price)}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</PageHome>
			<Footer />
		</>
	)
}

export default Home
