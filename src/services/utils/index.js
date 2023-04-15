// ** Redux Imports
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// ** Other Imports
import { Mutex } from "async-mutex"

const baseUrl = "http://phone.pinodev.shop:8000/api"

const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: { accessToken },
    } = getState()

    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`)
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
  }

  return result
}
