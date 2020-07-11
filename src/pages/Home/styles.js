import styled from 'styled-components'

export const PageHome = styled.div`
	.box {
		height: 600px;
		display: block;
		border: 1px solid blue;
	}

	h2 {
		font-weight: 500;
		font-size: 1.8rem;
		margin: 16px 0;
	}

	.plans {
		display: flex;
		align-items: start;
		justify-content: space-between;
		margin-bottom: 52px;
	}
`

export const CardPlan = styled.div`
	box-shadow: 0px 0px 4px 1px #ededed;
	background: #fff;
	margin: 0 1%;
	padding: 12px 16px;
	border-radius: 10px;

	h3 {
		font-weight: 500;
		color: ${(props) => props.theme.primaryColor};
		font-size: 1.4rem;
	}

	p {
		color: #666;
		margin: 16px 0 24px 0;
	}

	button {
		border: 0;
		background: ${(props) => props.theme.secundaryColor};
		color: #fff;
		padding: 8px 16px;
		border-radius: 10px;
		transition: all 0.3s;

		&:hover {
			background: ${(props) => props.theme.secundaryColorHover};
		}
	}
`
