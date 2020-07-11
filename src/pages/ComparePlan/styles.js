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
			display: flex;
			flex-direction: column;
			position: relative;
			width: 100%;
			padding-bottom: 20px;
			margin-bottom: 8px;

			@media (min-width: 768px) {
				max-width: 150px;
				margin-right: 8px;
			}

			span {
				position: absolute;
				font-size: 0.7rem;
				bottom: 0;
				color: #dc2525;
			}

			label {
				margin-bottom: 4px;
				font-weight: 500;
				padding-left: 4px;
			}

			input,
			select {
				border: 0;
				background: #fff;
				padding: 8px;
				border: 1px solid #dedede;
				height: 38px;
				font-size: 1rem;
			}
		}

		button {
			height: 32px;
			line-height: 33px;
			padding: 0 16px;
		}
	}
`
