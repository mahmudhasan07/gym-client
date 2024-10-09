'use client'
import React from 'react';

const Registration = () => {

    const handleRegistration = (e) => {
        e.preventDefault()
        const inputs = e.target
        
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