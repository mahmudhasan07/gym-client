'use client'
import React, { createContext } from 'react';

export const ContextSource = createContext()

const ContextAPI = ({ children }) => {
    return <ContextSource.Provider>{children}</ContextSource.Provider>
};

export default ContextAPI;