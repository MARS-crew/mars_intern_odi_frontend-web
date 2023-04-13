// ** Redux Imports
import { updateUser, userLogout } from "app/auth"
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// ** Other Imports
import { Mutex } from "async-mutex"

const baseUrl = "/api"

const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: { accessToken },
    } = getState()

    if (accessToken) {
      headers.set("authorization", `Bearer ${authToken}`)
    }

    return headers
  },
  baseUrl,
})

const mutex = new Mutex()
export const customFetchBase = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401 || result.error?.status === 403) {
    // if (!mutex.isLocked()) {
    //   const release = await mutex.acquire()
    //   try {
    //     const {
    //       auth: { accessToken, refreshToken },
    //     } = api.getState()
    //     const { data } = await baseQuery(
    //       {
    //         url: "/user/token",
    //         method: "POST",
    //         body: { accessToken, refreshToken },
    //       },
    //       api,
    //       extraOptions,
    //     )
    //     if (data) {
    //       const authToken = data.data
    //       api.dispatch(updateUser({ authToken }))
    //       result = await baseQuery(args, api, extraOptions)
    //     } else {
    //       api.dispatch(userLogout())
    //     }
    //   } finally {
    //     release()
    //   }
    // } else {
    //   await mutex.waitForUnlock()
    //   result = await baseQuery(args, api, extraOptions)
    // }
  }

  return result
}
