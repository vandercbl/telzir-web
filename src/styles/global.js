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

	@media (min-width: 768px){
		min-height: 100vh;
	}
}

footer {
	margin-top: auto;
}

body, input, button {
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
}

button {
	cursor: pointer;
}

.container {
	max-width: 1300px;
	padding: 16px;
	margin: 0 auto;
	/* display: flex;
	width: 100%; */
	position: relative;
	border: 1px solid red;
}

`
