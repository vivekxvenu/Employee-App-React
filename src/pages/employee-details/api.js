import { BaseApi } from "../../services/BaseApi"

const detailsApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeByID: builder.query({
        query: (id) => `employee/${id}`
      }),
  }),
  overrideExisting: false,
})

export const { useGetEmployeeByIDQuery} = detailsApi