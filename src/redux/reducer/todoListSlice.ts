import {
    createAsyncThunk, createSlice,
    // PayloadAction 
} from "@reduxjs/toolkit";
import { TodoState } from "../../model/type";
import { findTodoList, createTodoItem, updateTodoItem, deleteTodoItem } from "../../service";

interface initialStateType {
    todoList: TodoState[]
    isLoading: boolean
}

const initialState: initialStateType = {
    todoList: [],
    isLoading: false
}

export const fetchDataTodo = createAsyncThunk('/fetchDataTodo',
    async () => {
        try {
            let rs: any = await findTodoList()
            if (rs) return rs.data
        } catch (error) {
            console.log(error);
            return
        }
    })

export const fetchAddItem = createAsyncThunk('/fetchAddItem',
    async (data: Partial<TodoState>) => {
        try {
            let rs = await createTodoItem(data)
            if (rs) return rs.data?.successMsg
        } catch (error) {
            console.log(error);
            return
        }
    })

export const fetchUpdateItem = createAsyncThunk('/fetchUpdateItem',
    async (data: Partial<TodoState>) => {
        try {
            let rs = await updateTodoItem(data)
            if (rs) return rs.data?.successMsg
        } catch (error) {
            console.log(error);
            return
        }
    })

export const fetchDeleteItem = createAsyncThunk('./fetchDeleteItem',
    async (data: Partial<TodoState>) => {
        try {
            let rs = await deleteTodoItem({ id: data.id })
            if (rs) return rs.data?.successMsg
        } catch (error) {
            console.log(error);
            return
        }
    })

export const todoListSlice = createSlice({
    name: 'appTodo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchDataTodo.fulfilled, (state, action) => {
                state.todoList = action.payload.data
                state.isLoading = false
            })
    }
})
// export const tests = (state: any) => state.todoList.todoList
// export const { addTodoItem, deleteTodoItem, updateTodoItem } = todoListSlice.actions

//in createslice
// reducers: {
// addTodoItem: (state, action: PayloadAction<TodoState>) => {
//     state.todoList.push(action.payload)
// },
// deleteTodoItem: (state, action: PayloadAction<{ id: string }>) => {
//     state.todoList = state.todoList.filter((fill) => fill.id !== action.payload.id)
// },
// updateTodoItem: (state, action: PayloadAction<TodoState>) => {
//     const { title, author, id } = action.payload
//     state.todoList = state.todoList.map((todo) =>
//         todo.id === id ? { ...todo, title, author } : todo
//     )
//     // }
// },
export default todoListSlice.reducer