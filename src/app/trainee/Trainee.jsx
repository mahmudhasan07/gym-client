'use client'
import React, { use, useContext, useState } from 'react';
import { ContextSource } from '../components/ContextAPI/ContextAPI';
import Modal from '../components/Modal/Modal';
import useFetch2 from '../components/Hooks/useFetch2';

const Trainee = () => {
    const { user } = useContext(ContextSource)
    const [data, refetch] = useFetch2('user', user?.email)
    const [modal, setModal] = useState(false)
    console.log(data);

    return (
        <section className='bg-gray-300 lg:w-4/5 md:w-3/4 w-full lg:h-auto md:h-auto h-screen  '>
            <div className='border-2 lg:w-1/2 md:w-4/5 bg-white rounded-lg relative top-[15%] mx-auto p-5 border-gray-500'>
              {
                data == 'l' ?
                "loading"
                :
                <div>
                      <img src={data?.photo} className='w-80 object-cover h-80 mx-auto object-top rounded-full' alt="" />
                <button onClick={() => setModal(true)} className='text-blue-700 font-semibold text-lg text-end w-full'>Edit</button>
                <dialog open={modal}>
                    <Modal name={data?.name} email={data?.email} photo={data?.photo} setModal={setModal} refetch={refetch}></Modal>
                </dialog>
                <div className='text-xl'>
                    <div>
                        <label htmlFor="" className='font-bold'>Name:</label>
                        <h1>{data?.name}</h1>
                    </div>
                    <div>
                        <label htmlFor="" className='font-bold'>Email:</label>
                        <h1>{data?.email}</h1>
                    </div>
                </div>
                </div>
              }
            </div>
        </section>
    )
};

export default Trainee;