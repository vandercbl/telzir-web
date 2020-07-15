import styled, { keyframes } from 'styled-components'

const appearFromBottom = keyframes`
	from{
		opacity: 0;
		transform: translateY(50px);
	}to {
		opacity: 1;
		transform: translateY(0);
	}
`

export const PageDashboardAdmin = styled.div`
	font-size: 14px;

	&.container {
		margin-top: 20px;
	}

	h1 {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		> i {
			margin-left: 16px;
			font-size: 12px;
			display: flex;
			align-items: center;
			font-weight: 500;
			font-style: normal;
			border-radius: 10px;
			padding: 4px 8px;
			cursor: pointer;
			color: #ffffffdd;
			background: #333;
			transition: all 0.3s;

			&:hover {
				background: #000;
				color: #fff;
			}

			svg {
				font-size: 16px;
				margin-right: 4px;
			}
		}
	}

	.panels {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		animation: ${appearFromBottom} 2s;

		@media (min-width: 768px) {
			flex-wrap: unset;
		}

		> div {
			margin: 16px 8px;
			background: #fff;
			border-radius: 10px;
			box-shadow: 1px 1px 1px 1px #ccc;
			width: 100%;

			@media (min-width: 768px) {
				width: auto;
			}

			h1 {
				font-size: 1.4rem;
				font-weight: 500;
			}
		}

		table {
			margin: 16px 0;

			tr:nth-child(even) {
				td {
					background: #f8f8f8;
				}
			}

			th,
			td {
				@media (max-width: 767px) {
					padding: 8px 6px;
				}
			}
		}
	}
`
