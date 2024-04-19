import { useRef, useState } from 'react';
import Button from '../../Components/Button/Button';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Login.css'
import MsgBox from '../../Components/MsgBox/MsgBox';
import axios from 'axios';
 
const Login=()=>{
    const [msg,setMsg] = useState({
        isOpen:false,
        status:'Information',
        message:"Message"
    })
    const emailRef = useRef()
    const pwdRef = useRef()
    const handleLogin=()=>{
        axios.post(import.meta.env.VITE_APP_URL,)
        setMsg({
            ...msg,
            isOpen:true,
            status:'Success',
            message:'null'
        })
        pwdRef.current.value=""
        pwdRef.current.focus()
        pwdRef.current.blur()
        emailRef.current.focus()
        emailRef.current.value=""
    }

    return(
        <div className="loginContainer">
            <h2 className='highlight'>Login</h2>
            <Textbox var={emailRef} type="text" legend="Email"/>
            <Textbox var={pwdRef} type="Password" legend="Password"/>
            <Hyperlink href="/forgot-password" value="Forgot Password?"/>
            <Button onClick={handleLogin} value="Login"/>
            {msg.isOpen&&<MsgBox setMsg={setMsg} data={msg}/>}
            <p>
                Don't have an account?&nbsp;
                <Hyperlink href="/register" value="Register"/>
            </p>
        </div>
    )
}

export default Login;