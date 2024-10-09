'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Registration = () => {
    // const count = useSelector((state) => state.Auth.value)
    // console.log(count);
    const dispatch = useDispatch()

    const handleRegistration = (e) => {
        e.preventDefault()
        const inputs = e.target
        const name = inputs.name.value
        const email = inputs.email.value
        const photo = inputs.photo.files[0]
        const password = inputs.password.value
        console.log(photo);






    }

    return (
        <section>
            <form onSubmit={handleRegistration} action="" className='space-y-4'>
                <div >
                    <label className='text-xl font-semibold' for="name">Name:</label> <br />
                    <input type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div >
                    <label className='text-xl font-semibold' for="name">Email:</label> <br />
                    <input type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div >
                    <label className='text-xl font-semibold' for="name">Upload Image:</label> <br />
                    <input type="file" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div >
                    <label className='text-xl font-semibold' for="name">Password:</label> <br />
                    <input type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div className='text-center'>
                    <button className='border-2 px-3 py-2 w-32 text-lg font-bold bg-blue-600 text-white rounded-lg'>Registration</button>
                </div>
            </form>
        </section>
    );
};

export default Registration;