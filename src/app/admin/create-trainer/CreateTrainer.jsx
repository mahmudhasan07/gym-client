'use client'
import Loader from '@/app/components/Loader/Loader';
import { createUser, logOut } from '@/app/components/Redux/ReduxFuncation';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTrainer = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const handleRegistration = (e) => {
        e.preventDefault()
        setLoading(true)
        const inputs = e.target
        const name = inputs.name.value
        const email = inputs.email.value
        const image = inputs.photo.files[0]
        const password = inputs.password.value
        const role = "trainer"
        if (email && password) {
            const fromData = new FormData()
            fromData.append("file", image)
            fromData.append("upload_preset", 'gym-site')
            axios.post('https://api.cloudinary.com/v1_1/daudgshta/upload', fromData)
                .then(res => {
                    console.log(res);
                    if (res.data) {
                        const photo = res.data.secure_url
                        dispatch(createUser({ email, password, name, photo, role }))
                            .then(res => {
                                if (res.error) {
                                    setLoading(false)
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
                                    dispatch(logOut())
                                    setLoading(false)
                                    inputs.reset()
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
                    setLoading(false)
                    console.log(err);

                })
        }
    }

    return (
        <section className='lg:w-4/5 md:w-3/4 w-full lg:h-auto md:h-auto h-screen bg-gray-300 relative'>

            {
                loading == true ?
                    <div className=' w-full h-full z-50 backdrop-blur-sm absolute'>
                        <div className='top-1/4 absolute left-[48%]'>
                        <Loader></Loader>
                        </div>
                    </div>
                    :
                    ""
            }

            <form  onSubmit={handleRegistration} action="" className='space-y-4 bg-white lg:w-4/5 md:w-4/5   mx-auto top-[20%] relative p-5 rounded-lg border-2 border-gray-500 '>
            <h1 className='text-2xl font-bold text-center'>Create Trainer Account</h1>
                <div className='flex justify-between flex-wrap'>
                    <div >
                        <label className='text-xl font-semibold'>Name:</label> <br />
                        <input name='name' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                    </div>
                    <div >
                        <label className='text-xl font-semibold' >Email:</label> <br />
                        <input name='email' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                    </div>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div >
                        <label className='text-xl font-semibold' >Upload Image:</label> <br />
                        <input name='photo' type="file" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                    </div>
                    <div >
                        <label className='text-xl font-semibold' >Password:</label> <br />
                        <input name='password' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                    </div>
                </div>
                <div className='text-center'>
                    <button  className='border-2 px-3 py-2 w-52 text-lg font-bold bg-blue-600 text-white rounded-lg'>Registration</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default CreateTrainer;