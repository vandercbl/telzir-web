import React from 'react'

import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

import { ContainerFooter } from './styles'

function Footer() {
	return (
		<ContainerFooter>
			<div className="container">
				<h2>Vander Cesar Barcellos Lima</h2>
				<a
					href="https://br.linkedin.com/in/vander-barcellos-lima"
					target="_blank"
					rel="noopener noreferrer"
					title="Linkedin"
				>
					<FaLinkedin /> Perfil
				</a>
				<a href="mailto:vandercbl@gmail.com">
					<AiOutlineMail /> vandercbl@gmail.com
				</a>
			</div>
		</ContainerFooter>
	)
}

export default Footer
