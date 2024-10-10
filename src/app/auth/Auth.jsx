'use client'
import React, { useContext, useState } from 'react';
import Registration from './Registration';
import { ContextSource } from '../components/ContextAPI/ContextAPI';
import Login from './Login';
import './Auth.css'

const Auth = () => {
    const [position, setPosition] = useState('translate-x-full');
    return (
        <section id='auth' className='bg-gray-200 h-screen'>
            <div className='border-2 bg-white w-2/3 p-5 rounded-lg border-gray-300 relative top-[20%] mx-auto '>
                <div className='flex justify-around'>
                <div className='my-auto'>
                    <Login></Login>
                </div>
                <hr className='border-2 h-96 border-blue-600 rounded-lg' />
                <div className='my-auto'>
                    <Registration></Registration>
                </div>
                </div>
                <div id='auth_banner' className={`absolute border-2 ${position} p-5 w-1/2 left-0 h-full top-0 text-white rounded-lg text-center bg-gradient-to-b from-blue-700 to-blue-500 `}>
                    
                    {
                        position == "translate-x-full" ?
                            <div className='my-auto relative top-10'>
                                <h1 className='text-3xl text-center my-2 font-bold'>Welcome To Our Website</h1>
                                <h2 className='text-lg font-semibold'>
                                    Please enter your name , email, password to create an account on our website
                                </h2>
                                <h1 className='text-center font-bold text-3xl my-4'>OR</h1>
                                <h2 className='my-4 text-lg font-semibold'>If you are a new user , please registration in our website</h2>
                                <button id='button'  onClick={() => setPosition("translate-x-0")}>Sign Up</button>
                            </div>
                            :
                            <div className='my-auto relative top-10'>
                                <h1 className='text-3xl text-center my-2 font-bold'>Welcome To Our Website</h1>
                                <h2 className='text-lg font-semibold'>
                                    Please enter your email, password to create an account on our website
                                </h2>
                                <h1 className='text-center font-bold text-3xl my-4'>OR</h1>
                                <h2 className='my-4 text-lg font-semibold'>If you are already a user , please login in our website</h2>
                                <button className='' id='button' onClick={() => setPosition("translate-x-full")}>Sign In</button>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Auth;