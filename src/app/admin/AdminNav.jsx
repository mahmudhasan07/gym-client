'use client'
import Link from 'next/link';
import React from 'react';

const AdminNav = () => {
    return (
        <section className='lg:w-1/5 md:w-1/4 w-full bg-blue-700 lg:h-screen md:h-screen h-full lg:p-0 md:p-0 p-2 text-center'>
            <ul className='top-1/3 relative text-lg font-semibold text-white  lg:block md:block flex flex-wrap justify-around gap-2'>
                <Link href={'/admin'}><li>Profile</li></Link>
                <Link href={'/admin/create-trainer'}><li>Create Trainer</li></Link>
                <Link href={'/admin/class-schedule'}><li>Class Schedule</li></Link>
                <Link href={'/admin/manage-trainer'}><li>Manage Trainers</li></Link>
                <Link href={'/'}><li>Back to Home</li></Link>

            </ul>
        </section>
    );
};

export default AdminNav;