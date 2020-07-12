import React from 'react'

import Header from './../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Table from '../../components/Table'

import { formatValue } from '../../utils/formatValue'

import priceDDD from '../../store/price-ddd'
import plans from '../../store/plans'

import { PageHome, CardPlan } from './styles'

function Home() {
	return (
		<>
			<Header />
			<Banner>
				<h3>Especialistas em chamadas de longa distância nacional</h3>
			</Banner>
			<PageHome>
				<div className="container">
					<h2>Nossos Planos</h2>
					<section className="plans">
						{plans.map((plan) => (
							<CardPlan key={plan.id}>
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
							{priceDDD.map((ddd) => (
								<tr key={ddd.id}>
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
