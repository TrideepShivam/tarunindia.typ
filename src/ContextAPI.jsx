import { createContext, useState } from "react";

export const Context = createContext()

const ContextAPI = ({children})=>{
    const [lightMode,setLightMode] = useState(false);

    return(
        <Context.Provider value={{
            lightMode,
            setLightMode
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextAPI;