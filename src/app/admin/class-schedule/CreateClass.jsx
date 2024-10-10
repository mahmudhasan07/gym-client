'use client'
import useAxios, { AxiosSource } from '@/app/components/Hooks/useAxios';
import useFetch1 from '@/app/components/Hooks/useFetch1';
import { createClass } from '@/app/components/Redux/ReduxFuncation';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Classes from './Classes';

const CreateClass = () => {
    const [data] = useFetch1('users', "trainer")
    const axiosLink = useAxios(AxiosSource)
    const dispatch = useDispatch()
    const date = useRef(null)
    const time = useRef(null)
    const trainer = useRef(null)


    const handleClass = (e) => {
        e.preventDefault()
        const classDate = date.current.value
        const startTime = time.current.value
        const trainerId = trainer.current.value
        let [hour, min] = startTime.split(":").map(Number)
        hour = hour + 2;
        const endTime = `${String(hour)}:${String(min)}`;

        dispatch(createClass({ classDate, startTime, trainerId, endTime }))
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
                    toast.success('Successfully create class', {
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
        <section className='w-full bg-gray-300 '>
            <div className='bg-white relative w-1/2 p-5 rounded-lg mx-auto top-[5%] space-y-3'>
                <h1 className='text-2xl font-bold text-center'>Create Class Schedule</h1>
                <div className='flex justify-between'>
                    <div className='text-xl font-semibold'>
                        <label htmlFor="">Enter Class Date:</label> <br />
                        <input ref={date} type="date" className='border-2 p-1 w-64 rounded-lg border-gray-500' name="" id="" />
                    </div>
                    <div className='text-xl font-semibold'>
                        <label htmlFor="">Enter Class Time:</label> <br />
                        <input ref={time} type="time" className='border-2 p-1 w-64 rounded-lg border-gray-500' name="" id="" />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-xl font-semibold'>
                        <label htmlFor="">Select Your Trainer</label> <br />
                        <select ref={trainer} className='border-2 p-1 w-64 rounded-lg border-gray-500' id="">
                            <option value="">Select  Trainer</option>
                            {
                                data == "l" ?
                                    "loading"
                                    :
                                    data?.map((e, idx) =>
                                        <option value={e?._id} key={idx}>
                                            <h1>{e?.name}</h1>
                                        </option>)
                            }

                        </select>
                    </div>
                    <div className='mt-auto'>
                        <button id='button' onClick={handleClass} className='bg-blue-700 text-white font-semibold text-lg'>Create Class</button>
                    </div>
                </div>
            </div>
            <div className='bg-white w-1/2 p-5 rounded-lg mx-auto h-96 top-[10%] relative  space-y-3 '>
                <Classes></Classes>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default CreateClass;