import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginState, SignUpState } from "../../model/type"
import { loginAccount, signupAccount } from "../../service"

interface initialStateType {
    account: LoginState & SignUpState,
    isLoading: boolean
}

const initialState: initialStateType = {
    account: {},
    isLoading: false
}

export const fetchLogin = createAsyncThunk('./fetchLogin', async (data: Partial<LoginState>) => {
    try {
        let rs = await loginAccount(data)
        if (rs) {
            localStorage.setItem('token', rs?.data?.token)
            return rs?.data
        }
    } catch (error: any) {
        console.log(error);
        return error.response.data
    }
})

export const fetchSignUp = createAsyncThunk('./fetchSignUp', async (data: Partial<LoginState & SignUpState>) => {
    try {
        let rs = await signupAccount(data)
        if (rs) {
            // localStorage.setItem('token', rs?.data?.token)
            return rs?.data
        }
    } catch (error: any) {
        console.log(error);
        return error.response.data
    }
})

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.account = action.payload.data
                state.isLoading = false
            })
            .addCase(fetchSignUp.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchSignUp.fulfilled, (state, action) => {
                state.account = action.payload.data
                state.isLoading = false
            })
    }

})