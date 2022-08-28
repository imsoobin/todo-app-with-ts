import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiState, LoginState, SignUpState } from "../../model/type";
import { submitAccount } from "../../service";

interface initialStateType {
  account: LoginState & SignUpState;
  isLoading: boolean;
}

const initialState: initialStateType = {
  account: {},
  isLoading: false,
};

export const fetchSubmit = createAsyncThunk(
  "./fetchSubmit",
  async (data: Partial<LoginState & ApiState>) => {
    try {
      let rs = await submitAccount(data);
      if (rs && data?.navigate === 'login') {
        localStorage.setItem("token", rs?.data?.token);
        return rs?.data;
      }else{
        return rs?.data;
      }
    } catch (error: any) {
      console.log(error);
      return error.response.data;
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubmit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubmit.fulfilled, (state, action) => {
        state.account = action.payload.data;
        state.isLoading = false;
      });
  },
});
