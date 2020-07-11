import styled from 'styled-components'

export const ContainerTable = styled.table`
	border-collapse: collapse;
	min-width: 100%;
	margin: 34px auto;

	@media (min-width: 768px) {
		min-width: 80%;
	}

	th,
	td {
		padding: 8px 24px;
		text-align: center;
	}

	td {
		border-top: 1px solid #ededed;
		background: #fff;
	}

	th {
		font-weight: 500;
		background: ${(props) => props.theme.primaryColor};
		color: #fff;
		border-bottom: 2px solid ${(props) => props.theme.secundaryColor};

		&:first-of-type {
			border-radius: 10px 0 0 0;
		}

		&:last-of-type {
			border-radius: 0 10px 0 0;
		}
	}
`
