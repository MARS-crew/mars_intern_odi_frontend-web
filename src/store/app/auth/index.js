// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: "",
  name: "",
  accessToken: "",
  refreshToken: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state) => {
      state = initialState
    },
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const { userLogout } = authSlice.actions

export const selectMe = (state) => state.auth
