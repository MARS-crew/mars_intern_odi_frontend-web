import { api } from "../api"

export const authApi = api
  .enhanceEndpoints({
    addTagTypes: ["Auth"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({}),
  })

export const {} = authApi
