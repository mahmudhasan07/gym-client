'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../Redux/ReduxFuncation';
import axios from 'axios';
import useAxios, { AxiosSource } from '../Hooks/useAxios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ name, email, photo, setModal, refetch }) => {
    const dispatch = useDispatch()
    const axiosLink = useAxios(AxiosSource)
    const handleInfo = (e) => {
        e.preventDefault();
        const inputs = e.target
        const updateName = inputs.updateName.value || name
        const image = inputs.updateImage.files[0]


        if (image) {
            const fromData = new FormData()
            fromData.append("file", image)
            fromData.append("upload_preset", 'gym-site')
            axios.post('https://api.cloudinary.com/v1_1/daudgshta/upload', fromData)
                .then(res => {
                    const updateImage = res.data.secure_url
                    dispatch(updateUserInfo({ email, updateName, updateImage }))
                    .then(res=>{
                        console.log(res);
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
                        else{
                            toast.success('update successful', {
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
                        refetch()

                    })

                })
        }
        else {
            dispatch(updateUserInfo({ email, updateName }))
            .then(res=>{
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
                else{
                    toast.success('update successful', {
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
                refetch()
            })
        }


    }

    return (
        <section className='fixed top-1/4 lg:left-[40%] md:left-[20%] left-0 backdrop-blur-sm  bg-white mx-auto p-5 border-2 border-gray-600 text-lg'>
            <div className='flex justify-end '>
                <button className='text-lg font-extrabold' onClick={() => setModal(false)}>X</button>
            </div>
            <form onSubmit={handleInfo} className='space-y-2' action="">
                <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap lg:gap-10 md:gap-10 gap-2'>
                    <div>
                        <label className='font-semibold'>Name:</label> <br />
                        <input name='updateName' defaultValue={name} type="text" className='p-1 border-2 w-60 border-gray-500' />
                    </div>
                    <div>
                        <label className='font-semibold'>Email:</label> <br />
                        <input type="text" value={email} disabled className='p-1 border-2 w-60 border-gray-500' />
                    </div>
                </div>
                <div className='flex lg:gap-10 md:gap-10 gap-4'>
                    <div>
                        <label className='font-semibold'>Upload Photo:</label> <br />
                        <input name='updateImage' type="file" className='p-1 border-2 w-60 border-gray-500' />
                    </div>
                    <div className='mt-auto'>
                        <button id='button' className='text-white font-semibold text-lg bg-blue-700'>Submit</button>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Modal;