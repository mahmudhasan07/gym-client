'use client'
import React from 'react';

const Login = () => {
    return (
        <section>
        <form action="" className='space-y-4'>
            <div >
                <label className='text-xl font-semibold' for="name">Email:</label> <br />
                <input type="text"  className='border-2 p-1 rounded-lg border-gray-600 w-96' />
            </div>
            <div >
                <label className='text-xl font-semibold' for="name">Password:</label> <br />
                <input type="text"  className='border-2 p-1 rounded-lg border-gray-600 w-96' />
            </div>
            <div className='text-center'>
                <button className='border-2 px-3 py-2 w-32 text-lg font-bold bg-blue-600 text-white rounded-lg'>Log In</button>
            </div>
        </form>
    </section>
    );
};

export default Login;