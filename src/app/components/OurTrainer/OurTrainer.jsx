'use client'
import React from 'react';
import useFetch1 from '../Hooks/useFetch1';
import { motion } from 'framer-motion'

const OurTrainer = () => {
    const [data] = useFetch1('users', "trainer")

    return (
        <section className='my-10'>
            <h1 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-extrabold'>Meet Our Trainers</h1>
            <div className='flex justify-center flex-wrap gap-5'>
                {
                    data == "l" ?
                        "loading"
                        :
                        data.slice(0,5).map((e, idx) =>
                            <motion.div
                                initial={{ opacity: 0, x: -(100 * (idx + 1)) }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}

                                key={idx} className='p-2 border-2 border-gray-500 rounded-lg'>
                                <img src={e.photo} className='w-52 h-52 rounded-lg object-cover object-top' alt="" />
                                <h1 className='text-lg text-center font-bold mt-2'>{e.name}</h1>
                            </motion.div>
                        )
                }
            </div>

        </section>
    );
};

export default OurTrainer;