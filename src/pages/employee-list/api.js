import { BaseApi } from "../../services/BaseApi"

const listApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
        query: () => 'employee',
        providesTags: ['EmployeeList'],
    }),

    deleteEmployees: builder.mutation({
        query: (id) => ({
          url: `employee/${id}`,
          method: 'DELETE',

        }),
        invalidatesTags: ['EmployeeList'],
        
      }),
  }),
  overrideExisting: false,
})

export const { useGetEmployeesQuery, useDeleteEmployeesMutation} = listApi