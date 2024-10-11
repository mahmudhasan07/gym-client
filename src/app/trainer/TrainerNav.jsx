'use client'
import Link from 'next/link';
import React from 'react';

const TrainerNav = () => {
    return (
        <section className='w-1/5 bg-blue-700 h-screen text-center'>
            <ul className='top-1/3 relative text-lg font-semibold text-white'>
                <Link href={'/trainer'}><li>Profile</li></Link>
                <Link href={'/trainer/class-schedule'}><li>Class Schedule</li></Link>
                <Link href={'/'}><li>Back to Home</li></Link>

            </ul>
        </section>
    );
};

export default TrainerNav;