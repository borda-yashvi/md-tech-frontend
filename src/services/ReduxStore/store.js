import { configureStore } from '@reduxjs/toolkit'
import usersApiSlice from './userSlice';


export const store = configureStore({
    reducer: {
    userApi: usersApiSlice.reducer,
    }
})
