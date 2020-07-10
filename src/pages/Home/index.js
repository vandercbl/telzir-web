import React from 'react'
import { PageHome, Banner } from './styles'

import Header from './../../components/Header'
import Footer from '../../components/Footer'

function Home() {
	return (
		<>
			{/* <div className="content"> */}
			<Header />
			<Banner></Banner>
			<PageHome>
				<div className="container">
					<h1>Home</h1>
				</div>
			</PageHome>
			{/* </div> */}
			<Footer />
		</>
	)
}

export default Home
