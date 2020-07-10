import React from 'react'

import { ContainerHeader } from './styles'

import logoTelzir from '../../assets/logo-telzir.png'

function Header() {
	return (
		<ContainerHeader>
			<div className="container">
				<img src={logoTelzir} width={50} />
			</div>
		</ContainerHeader>
	)
}

export default Header
