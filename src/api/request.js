import axios from 'axios'

const BASE_URL='http://localhost:8080'

const authRequest = axios.create({
    baseURL: BASE_URL
})

const apiRequest = axios.create({
    baseURL: BASE_URL
})
apiRequest.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken')
        config.headers['Authorization'] = 'Bearer' + accessToken
        return config
    }
)

apiRequest.interceptors.response.use(
    response => {
        console.log(response)
        return response
    },
    error => {
        console.log(error)
        return error
    }
)

export {authRequest, apiRequest}