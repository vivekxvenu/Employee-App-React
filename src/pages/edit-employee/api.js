import { BaseApi } from "../../services/BaseApi"

const editApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    editEmployees: builder.mutation({
        query: ({id, ...payload}) => ({
          url: `employee/${id}`,
          method: 'PUT',
          body: payload
        })
      }),
    getEmployeeByID: builder.query({
        query: (id) => `employee/${id}`
      }),
  }),
  overrideExisting: false,
})

export const { useEditEmployeesMutation, useGetEmployeeByIDQuery } = editApi