import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	outline: 0;
}

body {
	background: #F5F9FC;
	color: #333;
	-webkit-font-smoothing: antialiased;
}

body, #root {
	display: flex;
	flex-direction: column;
}

#root {
	height: auto;
	min-height: 100vh;

	@media (min-width: 768px){
		min-height: 100vh;
	}
}

footer {
	margin-top: auto;
}

body, input, button, select {
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	color: #333;
}

button {
	cursor: pointer;
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

h2 {
	font-weight: 500;
	font-size: 1.8rem;
	margin: 16px 0;
}

.container {
	max-width: 1300px;
	padding: 16px;
	margin: 0 auto;
	/* display: flex;
	width: 100%; */
	position: relative;
}

`
