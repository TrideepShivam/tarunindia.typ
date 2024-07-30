import axios from "axios";
import { useContext } from "react";
import { Context } from "./ContextAPI";



const api= axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
})

api.interceptors.request.use((config)=>{
    const token = JSON.parse(localStorage.getItem('USER_DETAILS'))
    config.headers.Authorization=`Bearer ${token&&token.access_token}`
    return config;
})



export default api