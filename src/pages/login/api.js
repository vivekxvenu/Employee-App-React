import { BaseApi } from "../../services/BaseApi"

const loginApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (payload) => ({
          url: `employee/login`,
          method: 'POST',
          body: payload
        })
      })
  }),
  overrideExisting: false,
})

export const { useLoginMutation} = loginApi