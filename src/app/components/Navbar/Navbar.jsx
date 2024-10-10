'use client'
import React, { useContext, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ContextSource } from '../ContextAPI/ContextAPI';
import { useDispatch } from 'react-redux';
import { logOut } from '../Redux/ReduxFuncation';

const NavBar = () => {
    const { user } = useContext(ContextSource)
    const dispatch = useDispatch()
    const navigate = useRouter()
    const [hidden, setHidden] = useState("hidden")

    const handleLogOut = () => {
        dispatch(logOut())
            .then(res => {
                console.log(res);
                navigate.push('/')
            })
        
    }

    return (
        <section className=' flex justify-around bg-blue-700 text-white p-2'>
            <div>
                <Link href={'/'}><img src='https://i.imgur.com/bQndivo.png' className='w-fit h-20 object-cover'></img></Link>
            </div>

            <div className="my-auto">
                {
                    user?.email ?
                        <div className="flex gap-3 relative">
                            <img onClick={() => hidden == "hidden" ? setHidden("flex") : setHidden("hidden")} src={user?.photoURL} className="w-12 h-12 rounded-full object-cover object-top cursor-pointer" alt="" />
                            <Link href={'/'}><button onClick={handleLogOut} id="button" className=" mt-1 text-base font-semibold">LogOut</button></Link>
                            <div className={`flex flex-col text-center absolute top-14 z-50 -ml-12 bg-white text-black p-2 rounded-xl text-lg ${hidden}`}>
                                <Link onClick={() => setHidden("hidden")} className="hover:bg-blue-700 hover:text-white rounded-lg px-1" href={`/trainee`}>Dashboard</Link>
                            </div>
                        </div>
                        :
                        <Link href={'/auth'}><button id="button" className=" text-xl font-semibold">Login</button></Link>
                }
            </div>
        </section>
    );
};

export default NavBar;