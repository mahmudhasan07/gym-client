'use client'
import React from 'react';

const Registration = () => {
    return (
        <section>
            <form action="">
                <div >
                    <label className='text-xl font-semibold' for="name">Name:</label> <br />
                    <input type="text"  className='border-2 p-1 rounded-lg border-gray-600 w-96' />
                </div>
            </form>
        </section>
    );
};

export default Registration;