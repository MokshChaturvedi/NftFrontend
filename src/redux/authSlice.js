import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../constants/authApi";
import { postWithoutToken, postWithToken, putWithToken } from "../services/apiServices";


const initialState = {
  apiStatus: null,
  logout: false,
};

export const signUpApi = createAsyncThunk(
  "auth/signUpApi",
  async (data) => await postWithoutToken(authApi.SignUp, data)
);

export const signInApi = createAsyncThunk(
  "auth/signInApi",
  async (data) => await postWithoutToken(authApi.Login, data)
);

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (data) => await postWithoutToken(authApi.Login, data)
);

export const getUserApi = createAsyncThunk(
  "auth/getuser",
  async (data) => await postWithoutToken(authApi.GetUser, data)
);

export const verifyOtpApi = createAsyncThunk(
  "auth/verifyOtpApi",
  async (data) => await postWithoutToken(authApi.VerifyOtp, data)
);

export const changePasswordApi = createAsyncThunk(
  "auth/changePasswordApi",
  async (data) => await putWithToken(authApi.ChangePassword, data)
);

export const forgotPasswordApi = createAsyncThunk(
  "auth/forgotPasswordApi",
  async (data) => await postWithoutToken(authApi.ForgotPassword, data)
);

export const updateUserApi = createAsyncThunk(
  "auth/updateUserApi",
  async (data) => await putWithToken(authApi.UpdateUser, data)
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState: { user: {}, userData: {} },
  reducers: {
    setAuthApiStatus: (state) => {
      state.apiStatus = null
    },
    setLogout: (state) => {
      state.logout = true
    }

  },
  extraReducers: {

    // signup 
    [signUpApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [signUpApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // signin
    [signInApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload;
      state.user = action.payload;
    },
    [signInApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // getUser
    [getUserApi.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [getUserApi.rejected]: (state, action) => {
      state.userData = action.payload
    },


    // update user , wallet add
    [updateUserApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [updateUserApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // verify otp
    [verifyOtpApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [verifyOtpApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // change Password Api
    [changePasswordApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [changePasswordApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // forgot Password Api
    [forgotPasswordApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [forgotPasswordApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

  },
});

export const { setAuthApiStatus, setLogout } = authSlice.actions;

export default authSlice.reducer;
