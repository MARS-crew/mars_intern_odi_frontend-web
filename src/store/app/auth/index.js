// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../../../services"

const initialState = {
  user: {
    name: "",
    accessToken: "",
    refreshToken: "",
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        console.log(payload)
        state.user = {
          name: payload.responseData.name,
          accessToken: payload.responseData.accessToken,
          refreshToken: payload.responseData.refreshToken,
        }
      },
    )
  },
})

export default authSlice.reducer

export const selectMe = (state) => state.auth.user
