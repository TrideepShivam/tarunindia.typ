import axios from "axios";

const api= axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
})
api.interceptors.request.use((config)=>{
    const token = JSON.parse(localStorage.getItem('USER_DETAILS'))
    config.headers.Authorization=`Bearer ${token&&token.access_token}`
    return config;
})



export default api