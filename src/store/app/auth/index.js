// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../../../services"

const initialState = {
  name: "",
  accessToken: "",
  refreshToken: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state = {
          name: payload.responseData.name,
          accessToken: payload.responseData.accessToken,
          refreshToken: payload.responseData.refreshToken,
        }
      },
    )
  },
})

export default authSlice.reducer
