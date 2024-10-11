'use client'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ContextSource } from '../ContextAPI/ContextAPI';
import { logOut } from '../Redux/ReduxFuncation';

const PrivateTrainee = ({ children }) => {
    const { roleLoading, role } = useContext(ContextSource)
    const dispatch = useDispatch()
    const navigate = useRouter()
    if (roleLoading) {
        return "loading"
    }
    if (role == 'trainee') {
        return children 
    }

    dispatch(logOut())
    return navigate.push('/')
};

export default PrivateTrainee;