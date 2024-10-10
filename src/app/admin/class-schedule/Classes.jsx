'use client'
import useFetch1 from '@/app/components/Hooks/useFetch1';
import React from 'react';

const Classes = () => {

    
    const [data] = useFetch1('classes')
     return (
        <section className='overflow-y-auto h-full space-y-3'>
            {
                data == 'l' ?
                "loading"
                :
                data?.map((e,idx)=>
                    <div key={idx} className='flex font-semibold justify-between border-2 rounded-lg text-lg border-gray-500 p-2'>
                        <img src={e.trainerId.photo} className='w-16 h-16 object-cover object-top' alt="" />
                        <h1 className='my-auto'>{e.trainerId.name}</h1>
                        <h1 className='my-auto'>Class Date : {e.classDate}</h1>
                        <div>
                        <h1>Class Date : {e.startTime}</h1>
                        <h1>Class Date : {e.endTime}</h1>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default Classes;