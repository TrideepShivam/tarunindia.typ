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
 
const Register=()=>{
    const {userDetails,setUserLocal,msg,setMsg} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()
    const pwdReRef = useRef()
    const tncRef = useRef(false)
    const handleRegister=()=>{
        setLoading(true)
        api.post('/auth/register',{
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:pwdRef.current.value,
            password_confirmation:pwdReRef.current.value
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
            console.log(response);
        });
    }
    if(loading){
        return <Loading/>
    }
    if(userDetails){
        return <>
            <Navigate to={'/dashboard'}/>
        </>
    }
    return(
        <div className="registerContainer">
            <h2 className='highlight'>Register</h2>
            <Textbox var={nameRef} type="text" legend="Full Name"/>
            <Textbox var={emailRef} type="text" legend="Email"/>
            <Textbox var={pwdRef} type="Password" legend="Password"/>
            <Textbox var={pwdReRef} type="Password" legend="Confirm Password"/>
            <Checkbox checkedRef={tncRef} value='Agree' transparent={true}/>
            <Hyperlink href="/tnc" value="Terms and Conditions"/>
            <Button onClick={handleRegister} value="Register"/>
            <p>
                Have an account?&nbsp;
                <Hyperlink href="/login" value="Login"/>
            </p>
        </div>
    )
}

export default Register;