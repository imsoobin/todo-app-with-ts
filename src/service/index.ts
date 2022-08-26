import axios from 'axios'
import { LoginState, SignUpState, TodoState } from '../model/type'
const HOST: string = 'http://localhost:1337'
const TOKEN =  localStorage.getItem('token')

export const findTodoList = () => {
    return axios({
        url: HOST + '/DTodo/find',
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        method: 'POST'
    })
}

export const createTodoItem = (data: Partial<TodoState>) => {
    return axios({
        url: HOST + '/DTodo/create',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        data: data
    })
}

export const updateTodoItem = (data: Partial<TodoState>) => {
    return axios({
        url: HOST + '/DTodo/update',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        data: data
    })
}

export const deleteTodoItem = (data: Partial<TodoState>) => {
    return axios({
        url: HOST + '/DTodo/delete',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        data
    })
}

export const loginAccount = (data: Partial<LoginState>) => {
    return axios({
        url: HOST + '/DUser/login',
        method: 'POST',
        data
    })
}
export const signupAccount = (data: Partial<LoginState & SignUpState>) => {
    return axios({
        url: HOST + '/DUser/signUp',
        method: 'POST',
        data
    })
}
