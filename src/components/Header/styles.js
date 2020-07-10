import styled from 'styled-components'

export const ContainerHeader = styled.header`
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav {
		a {
			display: inline-block;
			margin-left: 8px;
			text-decoration: none;
			font-size: 0.95rem;
			color: ${(props) => props.theme.secundaryColor};
			font-weight: 500;
			padding: 4px 8px;
			position: relative;

			&:after {
				content: '';
				display: block;
				height: 1px;
				width: 0;
				margin: 6px auto 0px;
				background: ${(props) => props.theme.secundaryColor};
				transition: all 0.7s;
			}

			&:hover {
				&:after {
					width: 90%;
				}
			}
		}
	}
`
