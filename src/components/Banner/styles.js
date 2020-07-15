import styled, { keyframes } from 'styled-components'

import imgBanner from '../../assets/bg-banner.jpg'

const appearFromBottom = keyframes`
	from{
		opacity: 0;
		transform: translateY(50px);
	}to {
		opacity: 1;
		transform: translateY(0);
	}
`

export const ContainerBanner = styled.div`
	background: ${(props) => props.theme.primaryColor};
	height: 250px;
	color: #fff;
	background: url(${imgBanner});
	background-size: cover;
	background-position: center;
	position: relative;

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${(props) => props.theme.primaryColor};
		opacity: 0.85;
		z-index: 0;
	}

	.container {
		z-index: 1;
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		flex-direction: column;
	}

	h3 {
		font-weight: 300;
		font-size: 1.7rem;
		width: 85%;
		text-shadow: 1px 2px 1px #333;
		text-align: center;
		animation: ${appearFromBottom} 2s;

		@media (min-width: 768px) {
			width: 70%;
			font-size: 2.2rem;
		}
	}

	a {
		margin-top: 16px;
		animation: ${appearFromBottom} 2s;
	}
`
