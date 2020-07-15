import simulator from '../utils/simulator'

const arrayPlans = [
	{
    "_id": "5f0c75fee7052f3b74c4753f",
    "name": "FaleMais 30",
    "minutes": 30,
    "description": "Fale de graça por até 30 minutos e só pague os minutos excedentes",
    "createdAt": "2020-07-13T14:55:58.470Z",
    "__v": 0
  },
  {
    "_id": "5f0c7612e7052f3b74c47540",
    "name": "FaleMais 60",
    "minutes": 60,
    "description": "Fale de graça por até 60 minutos e só pague os minutos excedentes",
    "createdAt": "2020-07-13T14:56:18.862Z",
    "__v": 0
  },
  {
    "_id": "5f0d3ac3309f8f45b0241e43",
    "name": "FaleMais 120",
    "minutes": 120,
    "description": "Fale de graça por até 120 minutos e só pague os minutos excedentes",
    "createdAt": "2020-07-14T04:55:31.332Z",
    "__v": 0
  }
]

const arrayPrices = [
	{
    "_id": "5f0ca08582dd532b74ec0e07",
    "origin": "011",
    "destiny": "016",
    "price": "1.90",
    "__v": 0,
    "id": "5f0ca08582dd532b74ec0e07"
  },
  {
    "_id": "5f0ca0ab82dd532b74ec0e08",
    "origin": "016",
    "destiny": "011",
    "price": "2.90",
    "__v": 0,
    "id": "5f0ca0ab82dd532b74ec0e08"
  },
  {
    "_id": "5f0e6ef97b8c8430c08d1e6d",
    "origin": "011",
    "destiny": "017",
    "price": "1.70",
    "__v": 0,
    "id": "5f0e6ef97b8c8430c08d1e6d"
  },
  {
    "_id": "5f0e6f567b8c8430c08d1e6e",
    "origin": "017",
    "destiny": "011",
    "price": "2.70",
    "__v": 0,
    "id": "5f0e6f567b8c8430c08d1e6e"
  },
  {
    "_id": "5f0e6f6f7b8c8430c08d1e6f",
    "origin": "011",
    "destiny": "018",
    "price": "0.90",
    "__v": 0,
    "id": "5f0e6f6f7b8c8430c08d1e6f"
  },
  {
    "_id": "5f0e6f7a7b8c8430c08d1e70",
    "origin": "018",
    "destiny": "011",
    "price": "1.90",
    "__v": 0,
    "id": "5f0e6f7a7b8c8430c08d1e70"
  }
]

const values = {
	origin: '011',
	destiny: '016',
	minutes: 80,
	plan: 'FaleMais 60',
	listPlans: arrayPlans,
	listPriceDDD: arrayPrices
}

describe('Simulador de planos', () => {
	it('Deve retornar a diferença entre os planos', () => {
		const { origin, destiny, minutes, plan, listPlans, listPriceDDD} = values
		const result = simulator(origin, destiny, minutes, plan, listPlans, listPriceDDD)
		expect(result.totalWithPlan).toEqual(41.8)
		expect(result.totalWithoutPlan).toEqual(152.0)
	})
})
