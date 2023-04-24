import { api } from "../api"

export const phoneApi = api
  .enhanceEndpoints({
    addTagTypes: ["Phone"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      savePhone: builder.mutation({
        query: (args) => ({
          url: "/phone",
          method: "POST",
          body: args,
        }),
      }),
    }),
  })

export const { useSavePhoneMutation } = phoneApi
