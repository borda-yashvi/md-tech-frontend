import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userList } from '../api';

const initialState = {
    usersListRes: {
        isError: false,
        isLoading: false,
        usersList: null
    }
};

export const fetchUserListAsync = createAsyncThunk(
    'getUserListAPI',
    async ({ params = {}, body = {}, query = {} }) => {
        const usersList = await userList(params, body, query);
        return usersList.data;
    }
);


const usersApiSlice = createSlice({
    name: 'userAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserListAsync.pending, (state, action) => {
                state.usersListRes.isLoading = true;
            })
            .addCase(fetchUserListAsync.fulfilled, (state, action) => {
                state.usersListRes.usersList = action.payload;
                state.usersListRes.isLoading = false;
            })
            .addCase(fetchUserListAsync.rejected, (state, action) => {
                console.log('UserListError :', action.error);
                state.usersListRes.isError = true;
                state.usersListRes.isLoading = false;
            })


    }
});

export default usersApiSlice;