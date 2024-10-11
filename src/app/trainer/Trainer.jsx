'use client'
import Link from 'next/link';
import React, { useContext } from 'react';
import { ContextSource } from '../components/ContextAPI/ContextAPI';

const Trainer = () => {
    const { user } = useContext(ContextSource)
    return (
        <section className='bg-gray-300 lg:w-4/5 md:w-3/4 w-full lg:h-auto md:h-auto h-screen  '>
            <div className='border-2 lg:w-1/2 md:w-4/5 bg-white rounded-lg relative top-[15%] mx-auto p-5 border-gray-500'>
                <img src={user?.photo} className='w-80 object-cover h-80 mx-auto rounded-full object-top' alt="" />
                {/* <button className='text-blue-700 font-semibold text-lg text-end w-full'>Edit</button> */}
                <div className='text-xl'>
                    <div>
                        <label htmlFor="" className='font-bold'>Name:</label>
                        <h1>{user?.name}</h1>
                    </div>
                    <div>
                        <label htmlFor="" className='font-bold'>Email:</label>
                        <h1>{user?.email}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Trainer;