'use client'
import Link from 'next/link';
import React from 'react';

const AdminNav = () => {
    return (
        <section className='w-1/5 bg-blue-700 h-screen text-center'>
            <ul className='top-1/3 relative text-lg font-semibold text-white'>
                <Link href={'/admin'}><li>Profile</li></Link>
                <Link href={'/admin/create-trainer'}><li>Create Trainer</li></Link>
                <Link href={'/admin/class-schedule'}><li>Class Schedule</li></Link>
                <Link href={'/admin/manage-trainer'}><li>Manage Trainers</li></Link>
            </ul>
        </section>
    );
};

export default AdminNav;