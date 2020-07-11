import React from 'react'
import { Link } from 'react-router-dom'

import { ContainerHeader } from './styles'

import logoTelzir from '../../assets/logo-telzir.png'

function Header() {
	return (
		<ContainerHeader>
			<div className="container">
				<h1 className="company-name">Telzir</h1>
				<img src={logoTelzir} width={50} alt="Logo Telzir" />
				<nav>
					<Link to="/">Home</Link>
					<Link to="/simulacao">Simulação</Link>
				</nav>
			</div>
		</ContainerHeader>
	)
}

export default Header
