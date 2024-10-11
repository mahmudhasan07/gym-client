'use client'
import { createAsyncThunk, createSlice, isFulfilled, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import useAxios, { AxiosSource } from '../Hooks/useAxios';


const auth = getAuth(app);
const axiosLink = useAxios(AxiosSource)
const initialState = {
    pending: "",
    error: {},
    complete: {}
}
const createUser = createAsyncThunk(
    'users/create',
    async ({ email, password, name, photo, role }) => {
        console.log(email, password, name, photo);
        try {
            await createUserWithEmailAndPassword(auth, email, password, name, photo)
                .then(async (res) => {
                    if (res) {
                        await updateProfile(auth.currentUser, {
                            displayName: name, photoURL: photo
                        })
                            .then(response => {
                                console.log(res);
                                logOut()

                                if (res) {
                                    signOut(auth)

                                    axiosLink.post('/users', { name, email, photo, role })
                                        .then(res => {
                                            console.log(res);

                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })

                                    return res.user
                                }
                            })
                    }
                })
        }
        catch (err) {
            throw err.message
        }
    }
)

const signIn = createAsyncThunk(
    'users/signIn',
    async ({ email, password }) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)

            return res.user
        }
        catch (err) {
            throw err.message
        }
    }
)

const logOut = createAsyncThunk(
    "users/logOut",
    async () => {
        return await signOut(auth)

    }
)


const createClass = createAsyncThunk(
    'createClass',
    async ({ classDate, startTime, trainerId, endTime }) => {
        try {
            const res = await axiosLink.post('/classes', { classDate, startTime, trainerId, endTime })
            return res.data
        }
        catch (err) {
            throw err?.response.data
        }
    }
)


const confirmClass = createAsyncThunk(
    'confirmClass',
    async ({ userId, classId }) => {
        try {
            const response = await axiosLink.patch(`/classes/${classId}`, { userId })
            console.log(response);

            return response.data

        }
        catch (err) {
            console.log(err);
            throw err?.response.data

        }

    }
)

const cancelClass = createAsyncThunk(
    'cancelClass',
    async ({ userId, classId }) => {
        try {
            const response = await axiosLink.patch(`/cancelclass/${classId}`, { userId })
            console.log(response);
            return response.data

        }
        catch (err) {
            console.log(err);
            throw err?.response.data

        }

    }
)


const updateUserInfo = createAsyncThunk(
    'updateUserInfo',
    async ({ email, updateName, updateImage }) => {
        try {
            const res = await axiosLink.patch(`/update/${email}`, { updateName, updateImage })
            console.log(res);
            return res.data

        }
        catch (err) {
            console.log(err);
            throw err?.message

        }
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
            })
            .addCase(signIn.pending, (state, action) => {
                console.log(action);
            })
            .addCase(signIn.fulfilled, (state, action) => {
                console.log(action);
            })
            .addCase(signIn.rejected, (state, action) => {
                console.log(action);
            })
            .addCase(logOut.pending, (state, action) => {
                console.log(action);
            })
            .addCase(logOut.fulfilled, (state, action) => {
                console.log(action);
            })
            .addCase(logOut.rejected, (state, action) => {
                console.log(action);
            })
            .addCase(createClass.pending, (state, action) => {
                console.log(action);
            })
            .addCase(createClass.fulfilled, (state, action) => {
                console.log(action);
            })
            .addCase(createClass.rejected, (state, action) => {
                console.log(action);
            })
            .addCase(confirmClass.pending, (state, action) => {
                console.log(action);
            })
            .addCase(confirmClass.fulfilled, (state, action, payload) => {
                console.log(action, payload);
            })
            .addCase(confirmClass.rejected, (state, action) => {
                console.log(action);
            })
    },
})

// export const { increment, decrement, incrementByAmount } = usersSlice.actions
export { createUser, signIn, logOut, createClass, confirmClass, cancelClass, updateUserInfo }
export default usersSlice.reducer