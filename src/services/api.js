import axios from 'axios'

const api = axios.create({
	baseURL: 'https://telzir-backend.herokuapp.com',
})

export default api
