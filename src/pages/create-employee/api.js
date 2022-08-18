import { BaseApi } from "../../services/BaseApi"

const createEmpApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployees: builder.mutation({
        query: (payload) => ({
          url: 'employee',
          method: 'POST',
          body: payload,
          
        }),
        
      }),
  }),
  overrideExisting: false,
})

export const { useCreateEmployeesMutation } = createEmpApi