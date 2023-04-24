import { api } from "../api"

export const phoneApi = api
  .enhanceEndpoints({
    addTagTypes: ["Phone"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      getPhoneList: builder.query({
        query: (args) => ({
          url: "/phone",
        }),
      }),
      savePhone: builder.mutation({
        query: (args) => ({
          url: "/phone",
          method: "POST",
          body: args,
        }),
      }),
    }),
  })

export const { useSavePhoneMutation, useGetPhoneListQuery } = phoneApi
