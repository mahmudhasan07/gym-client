'use client'
import React, { useContext, useState } from 'react';
import { ContextSource } from '../ContextAPI/ContextAPI';
import { useDispatch } from 'react-redux';
import { logOut } from '../Redux/ReduxFuncation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PrivateAdmin = ({ children }) => {
    const { roleLoading, role } = useContext(ContextSource)
    const dispatch = useDispatch()
    const navigate = useRouter()
    if (roleLoading) {
        return "loading"
    }
    if (role == 'admin') {
        return children
    }

    dispatch(logOut())
    return navigate.push('/')
};

export default PrivateAdmin;