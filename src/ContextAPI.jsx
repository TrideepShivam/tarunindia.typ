import { createContext, useEffect, useState } from "react";

export const Context = createContext()

const ContextAPI = ({children})=>{
    const [lightMode,setLightMode] = useState(
        localStorage.getItem('LIGHT_MODE')=='false'?false:true
    );
    const [userDetails,setUserDetails] = useState(
        JSON.parse(localStorage.getItem('USER_DETAILS'))
        // localStorage.getItem('USER_DETAILS')!=undefined?
        // JSON.parse(localStorage.getItem('USER_DETAILS')):
        // false
    )

    const setUserLocal=(data)=>{
        if(data){
            localStorage.setItem('USER_DETAILS',JSON.stringify(data))
            setUserDetails({...data})
        }else{
            localStorage.removeItem('USER_DETAILS')
            setUserDetails(false)
        }
    }

    return(
        <Context.Provider value={{
            lightMode,
            setLightMode,
            userDetails,
            setUserLocal
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextAPI;