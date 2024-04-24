import { useState } from 'react';
import MsgBox from '../../Components/MsgBox/MsgBox';
import './Play.css'
import {createPortal} from 'react-dom'
 
const Play=()=>{
    const [msg,setMsg] = useState(false)
    
    return(
    <>
        <p onClick={()=>setMsg({
            ...msg,
            isOpen:true,
            status:'success',
            message:'just a message'
        })}>Play</p>
        {msg.isOpen&&<MsgBox setMsg={setMsg} data={msg}/>}
    </>
    )
}

export default Play;