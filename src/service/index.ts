import axios from 'axios'
import { LoginState, SignUpState, TodoState } from '../model/type'
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
