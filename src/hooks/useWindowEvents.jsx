import { useEffect } from "react";

const useWindowEvents=(event,action)=>{
    useEffect(()=>{
        window.addEventListener(event,action)
        return ()=>{
            window.removeEventListener(event,action)
        }
    },[])
}
export default useWindowEvents;
