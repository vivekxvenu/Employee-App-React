import { getStorage } from './util';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const BaseApi = createApi({
    reducerPath: 'BaseApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://localhost:3000/api/',
      prepareHeaders: (headers) => {
        const token = getStorage("idToken");

        if(token) {
          headers.set('authorization',`Bearer ${token}`)
        }
        return headers
      }
   }),
    tagTypes: ['EmployeeList'],
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    endpoints: () => ({}),
    //endpoints: (builder) => ({
    //     getEmployees: builder.query({
    //         query: () => 'employee',
    //         providesTags: ['EmployeeList'],
    // }),
        // createEmployees: builder.mutation({
        //   query: (payload) => ({
        //     url: 'employee',
        //     method: 'POST',
        //     body: payload,
            
        //   }),
          
        // }),
        // deleteEmployees: builder.mutation({
        //   query: (id) => ({
        //     url: `employee/${id}`,
        //     method: 'DELETE',

        //   }),
        //   invalidatesTags: ['EmployeeList'],
          
        // }),
        // editEmployees: builder.mutation({
        //   query: ({id, ...payload}) => ({
        //     url: `employee/${id}`,
        //     method: 'PUT',
        //     body: payload
        //   })
        // }),
        // getEmployeeByID: builder.query({
        //   query: (id) => `employee/${id}`
        // }),
        // login: builder.mutation({
        //   query: (payload) => ({
        //     url: `employee/login`,
        //     method: 'POST',
        //     body: payload
        //   })
        // })
  //}),
});

export const { } = BaseApi;