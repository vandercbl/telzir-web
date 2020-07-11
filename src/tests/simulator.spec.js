import simulator from '../utils/simulator'

const values = {
	origin: '011',
	destiny: '016',
	minutes: 12,
	plan: 'FaleMais 30',
}

describe('Simulador de planos', () => {
	it('Deve retornar a diferença entre os planos', () => {
		const { origin, destiny, minutes, plan } = values
		simulator(origin, destiny, minutes, plan)
	})
})
