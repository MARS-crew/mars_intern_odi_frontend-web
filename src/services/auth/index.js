import { api } from "../api"

export const authApi = api
  .enhanceEndpoints({
    addTagTypes: ["Auth"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (args) => ({
          url: "/user/login",
          method: "POST",
          body: args,
        }),
      }),
    }),
  })

export const { useLoginMutation } = authApi
