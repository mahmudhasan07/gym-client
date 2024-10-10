'use client'
import React, { useContext } from 'react';
import { ContextSource } from '../components/ContextAPI/ContextAPI';

const Admin = () => {

    const { user } = useContext(ContextSource)
    console.log(user);

    return (
        <section className='bg-gray-300 w-full relative '>
            <div className='border-2 w-1/2 bg-white rounded-lg relative top-[15%] mx-auto p-5 border-gray-500'>
                <img src={user?.photoURL} className='w-80 object-cover h-80 mx-auto rounded-full' alt="" />
                <button className='text-blue-700 font-semibold text-lg text-end w-full'>Edit</button>
                <div className='text-xl'>
                    <div>
                        <label htmlFor="" className='font-bold'>Name:</label>
                        <h1>{user?.displayName}</h1>
                    </div>
                    <div>
                        <label htmlFor="" className='font-bold'>Email:</label>
                        <h1>{user?.email}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;