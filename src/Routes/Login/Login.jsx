import { useContext, useRef, useState } from 'react';
import Button from '../../Components/Button/Button';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Login.css'
import api from '../../api';
import { Context } from '../../ContextAPI';
import { Navigate } from 'react-router-dom';
 
const Login=()=>{
    const {userDetails,setUserLocal,msg,setMsg} = useContext(Context)

    const emailRef = useRef()
    const pwdRef = useRef()

    const handleLogin=()=>{
        api.post('/auth/login',{
            email:emailRef.current.value,
            password:pwdRef.current.value
        }).then(({data}) =>{
            setMsg({
                ...msg,
                isOpen:true,
                status:data.state,
                message:data.message
            })
            setUserLocal(data)
            console.log(data)
        }).catch(({response}) => {
            setMsg({
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            console.log(response);
        });

        pwdRef.current.value=""
        pwdRef.current.focus()
        pwdRef.current.blur()
        emailRef.current.focus()
        emailRef.current.value=""
    }
    if(userDetails){
        return <>
            <Navigate to={'/dashboard'}/>
        </>
    }

    return(
        <div className="loginContainer">
            <h2 className='highlight'>Login</h2>
            <Textbox var={emailRef} type="text" legend="Email"/>
            <Textbox var={pwdRef} type="Password" legend="Password"/>
            <Hyperlink href="/forgot-password" value="Forgot Password?"/>
            <Button onClick={handleLogin} value="Login"/>
            <p>
                Don't have an account?&nbsp;
                <Hyperlink href="/register" value="Register"/>
            </p>
        </div>
    )
}

export default Login;