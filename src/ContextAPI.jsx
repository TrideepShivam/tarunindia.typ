import { createContext, useState } from "react";

export const Context = createContext()

const ContextAPI = ({children})=>{
    const [lightMode,setLightMode] = useState(false);
    const [userDetails,setUserDetails] = useState({
        id:'1234',
        email:'xyz@gmail.com',
        token:'1q2w3e4r5t6y'
    })//JSON.stringify(localStorage.getItem('USER_DETAILS')));
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