'use client'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }
const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
   
)

// Then, handle actions in your reducers:
export const usersSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            state.entities.push(action.payload)
        })
    },
})

export const { increment, decrement, incrementByAmount } = usersSlice.actions
export default usersSlice.reducer