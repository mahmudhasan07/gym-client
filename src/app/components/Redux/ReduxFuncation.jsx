'use client'
import { createAsyncThunk, createSlice, isFulfilled, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);

const initialState = {
    pending: "",
    error: {},
    complete: {}
}
const createUser = createAsyncThunk(
    'users/create',
    async ({ email, password, name, photo }) => {
        console.log(email, password, name, photo);
        await createUserWithEmailAndPassword(auth, email, password, name, photo)
            .then(async (res) => {
                if (res) {
                    await updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                    })
                        .then(response => {
                            console.log(res);
                            if (res) {
                                signOut(auth)
                                return res.user
                            }
                        })
                }
            })
            .catch(err => {
                throw err.message
            })
    }
)

export const signUser = createAsyncThunk(
    'users/signIn',
    async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                return res
            })
            .catch(err => {
                throw err
            })
    }
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
        builder
            .addCase(createUser.pending, (state, action) => {
                console.log(action);

            })
            .addCase(createUser.fulfilled, (state, action) => {
                console.log(action);

            })
            .addCase(createUser.rejected, (state, action) => {
                console.log(action);
                state.error = action.error

            })
    },
})

// export const { increment, decrement, incrementByAmount } = usersSlice.actions
export { createUser }
export default usersSlice.reducer