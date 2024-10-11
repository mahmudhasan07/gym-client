'use client'
import useFetch1 from '@/app/components/Hooks/useFetch1';
import Modal from '@/app/components/Modal/Modal';
import { userDelete } from '@/app/components/Redux/ReduxFuncation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageTrainers = () => {

    const [data, refetch] = useFetch1('users', "trainer")
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()

    const handleDelete =(email)=>{
        console.log(email);
        dispatch(userDelete({email}))
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
                toast.success('update successful', {
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
            refetch()
        })
        
    }

    return (
        <section className='lg:w-4/5 md:w-3/4 w-full lg:h-auto md:h-auto h-screen bg-gray-300'>
            <div className='bg-white p-5 rounded-lg border-2 lg:w-1/2 md:w-4/5 mx-auto top-[10%] relative border-gray-600'>
                <h1 className='text-2xl font-bold text-center'>Our GYM Trainers</h1>
                <div className='space-y-3'>
                    {
                        data == "l" ?
                            "loading"
                            :
                            data.map((item, index) =>
                                <div key={index} className='flex justify-around gap-2 border-2 border-gray-500 p-2 rounded-lg'>
                                    <img src={item.photo} className='w-16 h-20 object-cover object-top rounded-xl' alt="" />
                                    <h1 className='my-auto text-xl font-semibold'>{item?.name}</h1>
                                    <div className='my-auto flex gap-3'>
                                        <button onClick={() => setModal(true)} id='button' className='bg-blue-700 text-white font-semibold text-lg'>Edit</button>
                                        <button onClick={()=> handleDelete(item?.email)} id='button' className='bg-blue-700 text-white font-semibold text-lg'>Delete</button>

                                    </div>
                                    <dialog open={modal}>
                                        <Modal name={item?.name} email={item?.email} photo={item?.photo} setModal={setModal} refetch={refetch}></Modal>
                                    </dialog>
                                </div>

                            )
                    }
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default ManageTrainers;