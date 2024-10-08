'use client'
import React from 'react';
import Registration from './Registration';

const Auth = () => {
    return (
        <section className='bg-gray-200 h-screen'>
            <div className='border-2 bg-white w-2/3 p-2 relative top-1/3'>
                <Registration></Registration>
            </div>
        </section>
    );
};

export default Auth;