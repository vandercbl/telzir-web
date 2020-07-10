import React from 'react'
import { Link } from 'react-router-dom'

import { ContainerHeader } from './styles'

import logoTelzir from '../../assets/logo-telzir.png'

function Header({ plans }) {
	const handleClick = (keyRef, e) => {
		e.preventDefault()
		keyRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	return (
		<ContainerHeader>
			<div className="container">
				<img src={logoTelzir} width={50} alt="Logo Telzir" />
				<nav>
					<Link to="/">Home</Link>
					<Link to="/comparacao-planos">Comparação de Planos</Link>
					<a href="/" onClick={(e) => handleClick(plans[2], e)}>
						Plan 1
					</a>
				</nav>
			</div>
		</ContainerHeader>
	)
}

export default Header
