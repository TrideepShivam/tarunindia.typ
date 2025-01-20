import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../components/button/Button';
import Textbox from '../../components/textbox/Textbox';
import './setAndForgot.css'
import api from '../../api';
import { Context } from '../../ContextAPI';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import Retry from '../../components/retry/Retry';
import MainFormContainer from '../../components/mainFormContainer/MainFormContainer';
import backgroundImg from '../../assets/new-password-form-image.png'

const SetPassword=()=>{
    useAuthInterceptor()
    const {id,token} = useParams();
    const {userDetails,setUserLocal,msg,setMsg} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const [retry,setRetry] =useState(false)
    const pwdRef = useRef()
    const pwdReRef = useRef()
    
    const handleReset=()=>{
        api.post('/auth/login',{
            password:pwdRef.current.value,
            confirm_password:pwdReRef.current.value
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
       return <Retry retry={handleReset} to='/login'/>
    }
    if(userDetails){
        return <>
            <Navigate to={'/dashboard'}/>
        </>
    }
    return(
        <MainFormContainer img={backgroundImg} heading="Reset Password" subheading="Reset your typ-A-thon account Password">
            <Textbox var={pwdRef} type="Password" legend="New Password"/>
            <Textbox var={pwdReRef} type="Password" legend="Confirm Password"/>
            <Button onClick={handleReset} value="Submit"/>
        </MainFormContainer>
    )
}

export default SetPassword;