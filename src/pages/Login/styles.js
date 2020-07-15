import styled from 'styled-components'

export const PageLogin = styled.div`
	height: 100vh;
	align-items: center;
	display: flex;
	width: 100%;

	.status {
		font-size: 12px;
		color: #bf3d3d;
		margin-bottom: 10px;
	}
`

export const BoxLogin = styled.div`
	background: #fff;
	border-radius: 10px;
	padding: 32px;
	margin: 0 auto;
	margin-bottom: 2vh;
	width: 95%;
	max-width: 350px;
	box-shadow: 0px 0px 11px 0px #ccc;
	display: block;

	h1 {
		font-size: 1.3rem;
		color: ${(props) => props.theme.primaryColor};
		font-weight: 500;
		text-align: center;
		margin-bottom: 24px;
	}
`
