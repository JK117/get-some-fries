import axios from 'axios'

const api = axios.create({
    baseURL: '',
    timeout: 3000,
})

api.interceptors.request.use(config => {
    console.log(config)
    return config
}, err => {
    Promise.reject(err)
})

api.interceptors.response.use(res => {
    console.log(res)
    return Promise.resolve(res)
}, err => {})

export default api
