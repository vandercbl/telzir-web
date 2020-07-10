import React, { createRef } from 'react'

import Header from './../../components/Header'
import Footer from '../../components/Footer'

import { PageHome, Banner } from './styles'

function Home() {
	const ref1 = createRef()
	const ref2 = createRef()
	const ref3 = createRef()

	const refs = [ref1, ref2, ref3]

	return (
		<>
			<Header plans={refs} />
			<Banner></Banner>
			<PageHome>
				<div className="container">
					<h1>Home</h1>

					<div ref={ref1} id="plan-1" className="box">
						plan-1
					</div>
					<div ref={ref2} id="plan-2" className="box">
						plan-2
					</div>
					<div ref={ref3} id="plan-3" className="box">
						plan-3
					</div>
				</div>
			</PageHome>
			<Footer />
		</>
	)
}

export default Home
