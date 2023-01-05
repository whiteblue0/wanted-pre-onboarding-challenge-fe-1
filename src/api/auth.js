import request from './request'

export function login(email, password) {
    const data = {email, password}
    return request({
        url: '/users/login',
        method: 'post',
        data
    })
}

export function signUp(email, password) {
    const data = {email, password}
    return request({
        url: '/users/create',
        method: 'post',
        data
    })
}