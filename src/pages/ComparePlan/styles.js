import styled from 'styled-components'

export const PageComparePlan = styled.div`
	.formSimulator {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 32px 0;

		@media (min-width: 768px) {
			flex-direction: row;
		}

		.field {
			@media (min-width: 768px) {
				max-width: 150px;
				margin-right: 8px;
			}
		}

		button {
			height: 32px;
			line-height: 33px;
			padding: 0 16px;
		}
	}
`

export const ResultSimulator = styled.div`
	@media (max-width: 767px) {
		table {
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: center;

			tr {
				display: flex;
				flex-direction: column;

				td,
				th {
					border-radius: 0;

					&:last-of-type,
					&:first-of-type {
						border-radius: 0;
					}
				}
			}
		}
	}
`
