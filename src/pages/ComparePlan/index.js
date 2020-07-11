import React from 'react'

import Header from './../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import { PageComparePlan } from './styles'

function ComparePlan() {
	return (
		<>
			<Header />
			<Banner>
				<h2>Faça uma simulação e veja qual plano é melhor para você</h2>
			</Banner>
			<PageComparePlan>
				<div className="container">
					<h1>Página de comparação de planos</h1>
				</div>
			</PageComparePlan>
			<Footer />
		</>
	)
}

export default ComparePlan
