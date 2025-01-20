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
    const [password,setPassword] = useState('')
    const [feedback, setFeedback] = useState([])
    const {id,token} = useParams();
    const navigate = useNavigate()
    const {userDetails,setUserLocal,msg,setMsg} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const [retry,setRetry] =useState(false)
    const pwdRef = useRef()
    const pwdReRef = useRef()
    
    useEffect(()=>{
        (!id||!token)&&navigate('/error',{
            state:{
                message:'Unauthorised user detected.',
                from:'/login'
            }
        })
        setFeedback(validatePassword(password))
    },[password])
    
    const validatePassword = (password) => { 
        const messages = []; 
        console.log(messages);
        (!/[A-Z]/.test(password))&&messages.push('Password must contain at least one uppercase letter.');
        (!/[0-9]/.test(password))&&messages.push('Password must contain at least one number.');
        (!/[^A-Za-z0-9]/.test(password))&&messages.push('Password must contain at least one special character.');
        (messages.length === 0)&&messages.push('\u2713 Password is strong!');
        console.log(messages)

        return messages; 
    }

    const handleReset=()=>{
        api.post('/auth/reset-password',{
            password:pwdRef.current.value,
            confirm_password:pwdReRef.current.value
        }).then((response) =>{
                setMsg({
                    ...msg,
                    isOpen:true,
                    status:response.data.state,
                    message:response.data.message
                })
            
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
            <Textbox var={pwdRef} type="Password" legend="New Password" onChange={(e)=>setPassword(e.target.value)}/>
            <ul style={{listStyleType:'none',width:'100%'}}> 
                {feedback.map((message, index) => ( <li key={index}>{message}</li> ))} 
            </ul>
            <Textbox var={pwdReRef} type="Password" legend="Confirm Password"/>
            <Button onClick={handleReset} value="Submit"/>
        </MainFormContainer>
    )
}

export default SetPassword;