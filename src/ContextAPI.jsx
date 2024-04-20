import { createContext, useState } from "react";

export const Context = createContext()

const ContextAPI = ({children})=>{
    const [lightMode,setLightMode] = useState(
        localStorage.getItem('LIGHT_MODE')=='false'?false:true
    );
    
    const [userDetails,setUserDetails] = useState(
        JSON.stringify(localStorage.getItem('USER_DETAILS'))
    );
    return(
        <Context.Provider value={{
            lightMode,
            setLightMode,
            userDetails,
            setUserDetails
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextAPI;