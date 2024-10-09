'use client'
import React, { createContext } from 'react';

export const ContextSource = createContext()

const ContextAPI = ({ children }) => {
    const value = "hello"
    return <ContextSource.Provider value={value}>{children}</ContextSource.Provider>
};

export default ContextAPI;