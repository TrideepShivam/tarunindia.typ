import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../components/button/Button';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Textbox from '../../components/textbox/Textbox';
import './Login.css'
import api from '../../api';
import { Context } from '../../ContextAPI';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import Retry from '../../components/retry/Retry';

const Login=()=>{
    useAuthInterceptor()
    const {userDetails,setUserLocal,msg,setMsg} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const [retry,setRetry] =useState(false)
    const emailRef = useRef()
    const pwdRef = useRef()
    
    const handleLogin=()=>{
        api.post('/auth/login',{
            email:emailRef.current.value,
            password:pwdRef.current.value
        }).then((response) =>{
            if(response.data.access_token){
                setMsg({
                    ...msg,
                    isOpen:true,
                    status:response.data.state,
                    message:response.data.message
                })
                setUserLocal(response.data)
            }else{
                setMsg({
                    ...msg,
                    isOpen:true,
                    status:response.data.state,
                    message:response.data.message
                })
            }
            setLoading(false)
        }).catch((response) => {
            console.log(response)
            setLoading(false)
            setRetry(true)
        });
    }
    if(loading){
        return <Loading/>
    }else if(retry){
       return <Retry retry={handleLogin} to='/login'/>
    }
    if(userDetails){
        return <>
            <Navigate to={'/dashboard'}/>
        </>
    }
    return(
        <div className="loginContainer">
            <h2 className='highlight'>Login</h2>
            <Textbox autofocus={true} var={emailRef} type="text" legend="Email"/>
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