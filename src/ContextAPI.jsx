import { createContext, useEffect, useState } from "react";
import MsgBox from "./components/msgBox/MsgBox";

export const Context = createContext()

const ContextAPI = ({children})=>{
    let baseUrl = import.meta.env.VITE_BASE_URL
    const [connected,setConnected] = useState(//if local then always true
        (baseUrl=='http://localhost:8000/api')?true:navigator.onLine
    )
    const [msg,setMsg] = useState(false)//for messagebox
    const [responsive,setResponsive]=useState(//for detecting mobile or tab
        navigator.userAgent.search('Mobile')>=0||navigator.userAgent.search('Tablet')>=0
    )
    //setting the resizing event to change the responsive value
    
    useEffect(() => {
        window.onresize = () => window.innerWidth < 820 ? setResponsive(true) : setResponsive(false);
        if(baseUrl!='http://localhost:8000/api'){   
            window.addEventListener('online', () => setConnected(true));
            window.addEventListener('offline', () => setConnected(false));

            // Cleanup event listeners on component unmount
            return () => {
                window.removeEventListener('online', () => setConnected(true));
                window.removeEventListener('offline', () => setConnected(false));
            }
        }
    }, [])
    const [lightMode,setLightMode] = useState(//for light mode dark mode
        localStorage.getItem('LIGHT_MODE')=='false'?false:true
    );
    const [userDetails,setUserDetails] = useState(//to get the user detail first
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
            setUserLocal,
            msg,
            setMsg,
            responsive,
            connected
        }}>
            {children}
            {msg.isOpen&&<MsgBox setMsg={setMsg} data={msg}/>}
        </Context.Provider>
    )
}
export default ContextAPI;