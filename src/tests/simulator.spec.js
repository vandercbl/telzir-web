import simulator from '../utils/simulator'

const values = {
	origin: '016',
	destiny: '011',
	minutes: 2,
	plan: 'FaleMais 30',
}

describe('Simulador de planos', () => {
	it('Deve retornar a diferença entre os planos', () => {
		const { origin, destiny, minutes, plan } = values
		const result = simulator(origin, destiny, minutes, plan)
		console.log(result.totalWithPlan)
		console.log(result.totalWithoutPlan)
	})
})
