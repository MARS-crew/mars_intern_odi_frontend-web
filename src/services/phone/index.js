import { api } from "../api"

export const phoneApi = api
  .enhanceEndpoints({
    addTagTypes: ["Phone"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      getPhoneList: builder.query({
        query: () => ({
          url: "/phone",
        }),
      }),
      getPhone: builder.query({
        query: (id) => ({
          url: `/phone/${id}`,
        }),
      }),
      updatePhone: builder.mutation({
        query: ({ idx, ...args }) => ({
          url: `/phone/${idx}`,
          method: "PUT",
          body: args,
        }),
      }),
      deletePhone: builder.mutation({
        query: (id) => ({
          url: `/phone/${id}`,
          method: "DELETE",
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

export const {
  useSavePhoneMutation,
  useGetPhoneListQuery,
  useLazyGetPhoneQuery,
  useUpdatePhoneMutation,
  useDeletePhoneMutation,
} = phoneApi
