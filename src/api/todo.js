import { apiRequest } from './request'

export function list() {
    return apiRequest({
        url: '/todos',
        method: 'get'
    })
}

export function getTodoById(id) {
    return apiRequest({
        url: `/todos/:${id}`,
        method: 'get'
    })
}

export function createTodo(data) {
    return apiRequest({
        url: `/todos`,
        method: 'post',
        data
    })
}