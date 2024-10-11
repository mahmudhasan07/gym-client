'use client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import useAxios, { AxiosSource } from '../Hooks/useAxios';

export const ContextSource = createContext()

const ContextAPI = ({ children }) => {
    const axiosLink = useAxios(AxiosSource)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [roleLoading, setRoleLoading] = useState(true);
    const [role, setRole] = useState(null);
    const auth = getAuth(app)
    useEffect(() => {
        onAuthStateChanged(auth, (response) => {
            setLoading(false)
            const email = response?.email
            if (response?.email) {
                axiosLink.get(`/user/${response.email}`)
                    .then(res => {
                        setRole(res?.data?.role)
                        setUser(res.data)
                        setRoleLoading(false)
                    })

                    axiosLink.post('/jwt', {email})
                    .then(res=>{
                        return res.data
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
            else {
                setRoleLoading(false)
                setUser(null)
            }
        })
    }, []);

    const value = { user, loading, setLoading, role, roleLoading }
    return <ContextSource.Provider value={value}>{children}</ContextSource.Provider>
};

export default ContextAPI;