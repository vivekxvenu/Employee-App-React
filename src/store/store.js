import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { getDefaultNormalizer } from '@testing-library/react'
import { BaseApi } from '../services/BaseApi'
import counterReducer from './slices/counterSlices'


const store = configureStore({
  reducer: {
  
    [BaseApi.reducerPath]: BaseApi.reducer,},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

setupListeners(store.dispatch);

export default store;