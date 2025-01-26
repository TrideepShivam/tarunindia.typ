import { Navigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import MainFormContainer from '../../components/mainFormContainer/MainFormContainer'
import Textbox from '../../components/textbox/Textbox'
import './setAndForgot.css'
import Retry from '../../components/retry/Retry'
import Loading from '../../components/loading/Loading'
import { useContext, useRef, useState } from 'react'
import { Context } from '../../ContextAPI'
import useAuthInterceptor from '../../hooks/useAuthInterceptor'
import backgroundImg from './../../assets/forgot-password-image.png'
import Hyperlink from '../../components/hyperlink/Hyperlink'
import api from '../../api'

const FortgotPassword=()=>{
    useAuthInterceptor()
    const {userDetails,msg,setMsg} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const [retry,setRetry] =useState(false)
    const emailRef = useRef()
    
    const handleForgotPassword=()=>{
        api.post('/auth/update-password',{
            email:emailRef.current.value
        }).then((response) =>{
            setMsg({
                ...msg,
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            setLoading(false)
            emailRef.current.value=''
            emailRef.current.focus()
        }).catch((response) => {
            console.log(response)
            setLoading(false)
            setRetry(true)
        });
    }
    if(loading){
        return <Loading/>
    }else if(retry){
       return <Retry retry={handleForgotPassword} to='/login'/>
    }
    if(userDetails){
        return <>
            <Navigate to={'/dashboard'}/>
        </>
    }
    return(
        <MainFormContainer img={backgroundImg} heading="Forgot Password" subheading="Trouble logging in? Enter your email to generate new one">
            <Textbox autofocus={true} var={emailRef} type="text" legend="Email"/>
            <Button onClick={handleForgotPassword} value="Submit"/>
            <p>
                Or&nbsp;
                <Hyperlink href="/login" value="Login"/>
            </p>
        </MainFormContainer>
    )
}

export default FortgotPassword;