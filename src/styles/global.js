import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	outline: 0;
}

body {
	background: #f5f5f5;
	color: #66625c;
	-webkit-font-smoothing: antialiased;
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
