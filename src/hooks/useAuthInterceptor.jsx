import { useContext, useEffect } from "react";
import api from "../api";
import { Context } from "../ContextAPI";


const useAuthInterceptor=()=>{
    const {setUserLocal,msg,setMsg} = useContext(Context)

    useEffect(()=>{
        const responseInterceptor = api.interceptors.response.use((response)=>{
            return response;
        },(error)=>{
            try{
                if(error.response.status==401){
                    localStorage.removeItem('USER_DETAILS')
                    setUserLocal("")
                    console.log(error.response)
                    
                    setMsg({
                        ...msg,
                        isOpen:true,
                        status:'Error',
                        message:error.response.statusText
                    })
                    return error.response;
                }
                return Promise.reject(error);
            }catch(error){
                console.log(error)
            }
        })
        return () => {
            api.interceptors.response.eject(responseInterceptor); // remove interceptor on dismount/auth change
        }
    },[])
}

export default useAuthInterceptor;