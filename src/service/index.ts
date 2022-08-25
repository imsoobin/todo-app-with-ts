import axios from 'axios'
import { TodoState } from '../model/type'
const HOST: string = 'http://localhost:1337'

export const findTodoList = () => {
    return axios({
        url: HOST + '/DTodo/find',
        method: 'POST'
    })
}

export const createTodoItem = (data: Partial<TodoState>) => {
    return axios({
        url: HOST + '/DTodo/create',
        method: 'POST',
        data: data
    })
}

export const updateTodoItem = (data: Partial<TodoState>) => {
    return axios({
        url: HOST + '/DTodo/update',
        method: 'POST',
        data: data
    })
}

export const deleteTodoItem = (data: Partial<TodoState>) => {
    return axios({
        url: HOST + '/DTodo/delete',
        method: 'POST',
        data
    })
}

