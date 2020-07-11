import React from 'react'

import { ContainerBanner } from './styles'

function Banner({ children }) {
	return (
		<ContainerBanner>
			<div className="container">{children}</div>
		</ContainerBanner>
	)
}

export default Banner
