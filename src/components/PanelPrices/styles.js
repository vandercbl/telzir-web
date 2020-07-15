import styled, { css } from 'styled-components'

export const PagePanelPrices = styled.div`
	padding: 16px;

	h1 {
		display: flex;
		justify-content: space-between;

		button {
			padding: 8px;
			font-size: 14px;
		}
	}
`

export const ListPrices = styled.div`
	@media (min-width: 768px) {
		padding: 8px;
	}

	.delete {
		padding: 0;
		color: #e22b2b;
		vertical-align: center;

		i,
		svg {
			cursor: pointer;
		}
	}
`

export const NewPrices = styled.div`
	height: 0;
	overflow-y: auto;
	transition: height 0.4s;

	${(props) =>
		props.active &&
		css`
			height: 380px;
		`}

	.info {
		font-size: 0.9rem;
		margin: 16px 0;
	}

	form {
		margin-top: 16px;
	}
	button.secundary {
		background: #666;
		margin-left: 16px;
	}
`
