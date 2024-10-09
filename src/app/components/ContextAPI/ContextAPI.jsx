'use client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const ContextSource = createContext()

const ContextAPI = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    useEffect(() => {
        onAuthStateChanged(auth, (responsive) => {
            setUser(responsive)
            setLoading(false)

        })
    }, []);

    const value = {user, loading, setLoading}
    return <ContextSource.Provider value={value}>{children}</ContextSource.Provider>
};

export default ContextAPI;