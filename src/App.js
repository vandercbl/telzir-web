import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import Theme from './styles/theme'
import Routes from './routes'
import { noSleepHeroku } from './utils/notSleepHeroku'

function App() {
	return (
		<ThemeProvider theme={Theme}>
			{noSleepHeroku()}
			{/* Para o serviço de hospedagem gratuito do Heroku não "dormir" por inatividade */}
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	)
}

export default App
