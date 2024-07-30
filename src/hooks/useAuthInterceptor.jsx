import { useContext, useEffect } from "react";
import api from "../api";
import { Context } from "../ContextAPI";


const useAuthInterceptor=()=>{
    const {setUserLocal,msg,setMsg} = useContext(Context)

    useEffect(()=>{
        const authInterceptor = api.interceptors.response.use((response)=>{
            return response;
        },(error)=>{
            try{
                if(error.response.status==401){
                    console.log(error)
                    localStorage.removeItem('USER_DETAILS')
                    setUserLocal("")
                    return error.response;
                }
                return Promise.reject(error);
            }catch(error){
                console.log(error)
            }
        })
        return () => {
            api.interceptors.response.eject(authInterceptor); // remove interceptor on dismount/auth change
        }
    },[])
}

export default useAuthInterceptor;