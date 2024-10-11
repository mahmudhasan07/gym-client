'use client'
import { ContextSource } from '@/app/components/ContextAPI/ContextAPI';
import useFetch1 from '@/app/components/Hooks/useFetch1';
import useFetch2 from '@/app/components/Hooks/useFetch2';
import { cancelClass, confirmClass } from '@/app/components/Redux/ReduxFuncation';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TraineeClass = () => {
    const { user } = useContext(ContextSource)
    const dispatch = useDispatch()
    const [data,  refetch] = useFetch1('classes')
    const [data2] = useFetch2('user', user?.email)

    const handleConfirm = (id) => {
        const userId = data2?._id
        const classId = id
        dispatch(confirmClass({ userId, classId }))
            .then(res => {
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
                else {
                    refetch()
                    toast.success('Class Confirm Successful', {
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

    const handleCancel = (id) => {
        const userId = data2?._id
        const classId = id
        dispatch(cancelClass({ userId, classId }))
            .then(res => {
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
                else {
                    refetch()
                    toast.success('Class cancel successful', {
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



    return (
        <section className='bg-gray-300 lg:w-4/5 md:w-3/4 w-full lg:h-auto md:h-auto h-screen '>
            <div className='border-2 lg:w-4/5 md:w-11/12  bg-white rounded-lg relative top-[15%] mx-auto p-5 border-gray-500 space-y-3'>
                <h1 className='text-center text-2xl font-bold'>Todays Class Schedule</h1>
                {
                    data == 'l' ?
                        "loading"
                        :
                        data?.map((e, idx) =>
                            <div key={idx} className='flex font-semibold justify-around flex-wrap border-2 rounded-lg text-lg border-gray-500 p-2'>
                                <img src={e.trainerId.photo} className='w-16 h-16 object-cover object-top' alt="" />
                                <h1 className='my-auto'>{e.trainerId.name}</h1>
                                <h1 className='my-auto'>Class Date : {e.classDate}</h1>
                                <div>
                                    <h1>Class Date : {e.startTime}</h1>
                                    <h1>Class Date : {e.endTime}</h1>
                                </div>
                                <div className='my-auto'>
                                    {
                                        e?.booking?.find(e => e == data2?._id) ?
                                            <button onClick={() => handleCancel(e?._id)} id='button' className='bg-blue-700 text-white font-semibold'>Cancel</button>
                                            :
                                            <button onClick={() => handleConfirm(e?._id)} id='button' className='bg-blue-700 text-white font-semibold'>Confirm</button>
                                    }
                                </div>
                            </div>
                        )
                }
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default TraineeClass;