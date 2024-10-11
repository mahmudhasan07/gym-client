'use client'
import { ContextSource } from '@/app/components/ContextAPI/ContextAPI';
import useFetch1 from '@/app/components/Hooks/useFetch1';
import useFetch2 from '@/app/components/Hooks/useFetch2';
import React, { useContext } from 'react';

const TrainerClass = () => {
    const { user } = useContext(ContextSource)
    const [data2] = useFetch2('user', user?.email)
    const [data, refetch] = useFetch2('class', data2?._id)
    console.log(data);

    return (
        <section className='bg-gray-300 w-full relative '>
            <div className='border-2 w-4/5 bg-white rounded-lg relative top-[15%] mx-auto p-5 border-gray-500 space-y-3 max-h-96 overflow-y-auto'>
                <h1 className='text-center text-2xl font-bold'>Todays Class Schedule</h1>
                {
                    data == 'l' ?
                        "loading"
                        :
                        data?.map((e, idx) =>
                            <div key={idx} className='flex font-semibold justify-around border-2 rounded-lg text-lg border-gray-500 p-2'>
                                <img src={user?.photoURL} className='w-16 h-16 object-cover object-top' alt="" />
                                <h1 className='my-auto'>{user?.displayName}</h1>
                                <h1 className='my-auto'>Class Date : {e.classDate}</h1>
                                <div>
                                    <h1>Class Date : {e.startTime}</h1>
                                    <h1>Class Date : {e.endTime}</h1>
                                </div>
                                <div className='my-auto text-center'>
                                    <h1>Total Booking</h1>
                                    <h1>{e?.booking?.length}</h1>
                                </div>

                            </div>
                        )
                }
            </div>
        </section>
    );
};

export default TrainerClass;