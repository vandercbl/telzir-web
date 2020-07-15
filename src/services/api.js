import axios from 'axios'

const token = localStorage.getItem('@Telzir:token')

const api = axios.create({
	baseURL: 'https://telzir-backend.herokuapp.com',
})
api.defaults.headers.common.Authorization = `Bearer ${token}`

export default api
