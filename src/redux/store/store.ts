import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../reducer/todoListSlice";
// import 
export const store = configureStore({
    reducer: {
        appTodo: todoListSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch