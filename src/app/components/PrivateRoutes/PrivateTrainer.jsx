'use client'
import React, { useContext } from 'react';
import { ContextSource } from '../ContextAPI/ContextAPI';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logOut } from '../Redux/ReduxFuncation';

const PrivateTrainer = ({ children }) => {
    const { roleLoading, role } = useContext(ContextSource)
    const dispatch = useDispatch()
    const navigate = useRouter()
    if (roleLoading) {
        return "loading"
    }
    if (role == 'trainer') {
        return children 
    }

    dispatch(logOut())
    return navigate.push('/')
};

export default PrivateTrainer;