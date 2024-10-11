import axios from 'axios';
import React from 'react';


export const AxiosSource = axios.create({
    baseURL : "http://localhost:2000",
    // baseURL : "https://gym-server-production-763a.up.railway.app",
    withCredentials : true
}) 

const useAxios = () => {
    return AxiosSource
};

export default useAxios;