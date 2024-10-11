'use client'
import Link from 'next/link';
import React from 'react';

const TrainerNav = () => {
    return (
        <section className='lg:w-1/5 md:w-1/4 w-full bg-blue-700 lg:h-screen md:h-screen h-full lg:p-0 md:p-0 p-2  text-center'>
            <ul className='top-1/3 relative text-lg font-semibold text-white'>
                <Link href={'/trainer'}><li>Profile</li></Link>
                <Link href={'/trainer/class-schedule'}><li>Class Schedule</li></Link>
                <Link href={'/'}><li>Back to Home</li></Link>
            </ul>
        </section>
    );
};

export default TrainerNav;