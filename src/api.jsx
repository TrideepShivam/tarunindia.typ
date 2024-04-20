import axios from "axios";
import { useContext } from "react";
import { Context } from "./ContextAPI";

const {userDetails} = useContext(Context)

const api =axios.create({
        baseURL:import.meta.env.VITE_BASE_URL,
        headers:{
            'Authorization':`Bearer ${
                userDetails.token&&userDetails.token
            }`
        }
    });
export default api