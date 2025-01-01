import { useContext, useRef, useState } from 'react';
import Button from '../../components/button/Button';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Textbox from '../../components/textbox/Textbox';
import './Register.css'
import api from '../../api';
import { Context } from '../../ContextAPI';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import Checkbox from '../../components/checkbox/Checkbox';
import Retry from '../../components/retry/Retry';
import MainFormContainer from '../../components/mainFormContainer/MainFormContainer';
import backgroundImg from './../../assets/register-form-image.jpeg'

const Register=()=>{
    const {userDetails,setUserLocal,msg,setMsg} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const [retry,setRetry] =useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const tncRef = useRef(false)
    const handleRegister=()=>{
        api.post('/auth/register',{
            name:nameRef.current.value,
            email:emailRef.current.value
        }).then(({data}) =>{
            setMsg({
                ...msg,
                isOpen:true,
                status:data.state,
                message:data.message
            })
            setUserLocal(data)
            setLoading(false)
            console.log(data)
        }).catch(({response}) => {
            setMsg({
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            setLoading(false)
            setRetry(true)
            console.log(response);
        });
    }
    if(loading){
        return <Loading/>
    } else if(retry){
        return <Retry retry={handleRegister} to='/register'/>
     }
    if(userDetails){
        return <>
            <Navigate to={'/dashboard'}/>
        </>
    }
    return(
        <MainFormContainer img={backgroundImg} heading="Register" subheading='Join typ-A-thon today by filling in your details'>
            <Textbox autofocus={true} var={nameRef} type="text" legend="Full Name"/>
            <Textbox var={emailRef} type="text" legend="Email"/>
            <Checkbox checkedRef={tncRef} value='Agree' transparent={true}/>
            <Hyperlink href="/tnc" value="Terms and Conditions"/>
            <Button onClick={handleRegister} value="Register"/>
            <p>
                Have an account?&nbsp;
                <Hyperlink href="/login" value="Login"/>
            </p>
        </MainFormContainer>
    )
}

export default Register;