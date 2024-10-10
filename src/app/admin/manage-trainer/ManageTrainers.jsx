'use client'
import useFetch1 from '@/app/components/Hooks/useFetch1';
import React from 'react';

const ManageTrainers = () => {

    const [data] = useFetch1('users', "trainer")
    console.log(data);
    

    return (
        <section className='w-full bg-gray-300'>
            <div className='bg-white p-5 rounded-lg border-2 w-1/2 mx-auto top-[10%] relative border-gray-600'>
                <h1 className='text-2xl font-bold text-center'>Our GYM Trainers</h1>
                <div className='space-y-3'>
{
    data == "l"?
    "loading"
    :
    data.map((item, index) => 
    <div key={index} className='flex justify-around border-2 border-gray-500 p-2 rounded-lg'>
        <img src={item.photo} className='w-16 h-20 object-cover object-top rounded-xl' alt="" />
        <h1 className='my-auto text-xl font-semibold'>{item?.name}</h1>
        <div className='my-auto flex gap-3'>
            <button id='button' className='bg-blue-700 text-white font-semibold text-lg'>Edit</button>
            <button id='button' className='bg-blue-700 text-white font-semibold text-lg'>Delete</button>
            
        </div>
        

    </div>
    )
}
                </div>
            </div>
        </section>
    );
};

export default ManageTrainers;