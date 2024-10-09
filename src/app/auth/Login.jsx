'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../components/Redux/ReduxFuncation';
import { useRouter } from 'next/navigation';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useRouter()
    const handleLogin = (e) => {
        e.preventDefault()
        const inputs = e.target
        const email = inputs.email.value
        const password = inputs.password.value

        dispatch(signIn({email, password}))
        .then(res=>{
            navigate.push('/')
            
        })
    }

    return (
        <section>
            <form onSubmit={handleLogin} action="" className='space-y-4'>
                <div >
                    <label className='text-xl font-semibold' >Email:</label> <br />
                    <input name='email' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div >
                    <label className='text-xl font-semibold'>Password:</label> <br />
                    <input name='password' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div className='text-center'>
                    <button className='border-2 px-3 py-2 w-32 text-lg font-bold bg-blue-600 text-white rounded-lg'>Log In</button>
                </div>
            </form>
        </section>
    );
};

export default Login;