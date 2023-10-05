import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from './feature/Counter/counterSlice'
import logger from './middleWare/logger'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // using custom middlware
})