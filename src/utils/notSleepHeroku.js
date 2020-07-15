import api from '../services/api'

async function wakeAPI() {
	const d = new Date()
	const day = d.getDay()
	const hour = d.getUTCHours() - 3
	// hora com fuso horário - 3
	if (day !== 0 && day !== 6) {
		// 'dia de semana'
		if (hour > 8 && hour < 19) {
			// 'horário comercial'
			// Para o serviço de hospedagem gratuito do Heroku não "dormir" por inatividade.',
			// Plano gratuito tem limite de 550 horas por mês
			console.log('Wake Heroku')
			await api.get('/test').then((response) => response.data)
		}
	}
}

export const noSleepHeroku = () => {
	setInterval(() => {
		wakeAPI()
	}, 1800000)
	// 30 minutos
}
