'use client'
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../components/Redux/ReduxFuncation';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const dispatch = useDispatch()
    const handleRegistration = (e) => {
        e.preventDefault()
        const inputs = e.target
        const name = inputs.name.value
        const email = inputs.email.value
        const image = inputs.photo.files[0]
        const password = inputs.password.value
        if (email && password) {
            const fromData = new FormData()
            fromData.append("file", image)
            fromData.append("upload_preset", 'gym-site')
            axios.post('https://api.cloudinary.com/v1_1/daudgshta/upload', fromData)
                .then(res => {
                    console.log(res);
                    if (res.data) {
                        const photo = res.data.secure_url
                        dispatch(createUser({ email, password, name, photo }))
                            .then(res => {
                                if (res.error) {
                                    toast.error(res.error.message, {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "dark",
                                        transition: Bounce,
                                    });
                                }
                                else {
                                    toast.success('Registration Successful', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "dark",
                                        transition: Bounce,
                                    });
                                }
                            })
                    }

                })
                .catch(err => {
                    console.log(err);

                })
        }
    }

    return (
        <section>
            <form onSubmit={handleRegistration} action="" className='space-y-4'>
                <div >
                    <label className='text-xl font-semibold'>Name:</label> <br />
                    <input name='name' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div >
                    <label className='text-xl font-semibold' >Email:</label> <br />
                    <input name='email' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div >
                    <label className='text-xl font-semibold' >Upload Image:</label> <br />
                    <input name='photo' type="file" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div >
                    <label className='text-xl font-semibold' >Password:</label> <br />
                    <input name='password' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div className='text-center'>
                    <button className='border-2 px-3 py-2 w-32 text-lg font-bold bg-blue-600 text-white rounded-lg'>Registration</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Registration;