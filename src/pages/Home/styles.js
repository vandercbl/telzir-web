import styled from 'styled-components'

export const PageHome = styled.div`
	.box {
		height: 600px;
		display: block;
		border: 1px solid blue;
	}

	.plans {
		display: flex;
		align-items: start;
		justify-content: space-between;
		margin-bottom: 52px;
		flex-direction: column;

		@media (min-width: 768px) {
			flex-direction: row;
		}
	}
`

export const CardPlan = styled.div`
	box-shadow: 0px 0px 4px 1px #ededed;
	background: #fff;
	margin: 16px auto;
	padding: 12px 16px;
	border-radius: 10px;

	@media (min-width: 768px) {
		margin: 0 1%;
	}

	h3 {
		font-weight: 500;
		color: ${(props) => props.theme.primaryColor};
		font-size: 1.4rem;
	}

	p {
		color: #666;
		margin: 16px 0 24px 0;
	}
`
