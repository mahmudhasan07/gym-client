'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../components/Redux/ReduxFuncation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const Login = () => {
    const dispatch = useDispatch()
    const [pass, setPass] = useState("password")
    const navigate = useRouter()
    const handleLogin = (e) => {
        e.preventDefault()
        const inputs = e.target
        const email = inputs.email.value
        const password = inputs.password.value

        dispatch(signIn({email, password}))
        .then(res=>{
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
            else{
                navigate.push('/')
            }
            
        })
    }

    return (
        <section>
            <form onSubmit={handleLogin} action="" className='space-y-4'>
                <div >
                    <label className='text-xl font-semibold' >Email:</label> <br />
                    <input name='email' type="text" className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
                <div className='relative'>
                    <label className='text-xl font-semibold'>Password:</label> <br />
                    <input name='password' type={pass} className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                    <div className='absolute top-9 right-2 text-xl'>
                        {
                            pass == 'password' ?
                            <IoEye className='cursor-pointer' onClick={()=> setPass('text')} />
                            :
                            <IoEyeOff className='cursor-pointer' onClick={()=> setPass('password')} />
                        }
                    </div>

                </div>
                <div className='text-center'>
                    <button className='border-2 px-3 py-2 w-32 text-lg font-bold bg-blue-600 text-white rounded-lg'>Log In</button>
                </div>
                <div className='text-end'>
                <Link href={'/'}> <button className='text-lg text-blue-700 font-bold '>Back to Home</button></Link>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Login;