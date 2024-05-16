import { useContext, useRef } from 'react';
import Button from '../../Components/Button/Button';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Register.css'
import api from '../../api';
import { Context } from '../../ContextAPI';
import { Navigate } from 'react-router-dom';
 
const Register=()=>{
    const {userDetails,setUserLocal,msg,setMsg} = useContext(Context)

    const nameRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()
    const pwdReRef = useRef()
    const handleRegister=()=>{
        console.log(nameRef.current.value+" "+emailRef.current.value+" "+pwdRef.current.value);
        console.log(pwdRef.current.value==pwdReRef.current.value);
        
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
            console.log(data)
        }).catch(({response}) => {
            setMsg({
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            console.log(response);
        });

        pwdReRef.current.value=""
        pwdReRef.current.focus()
        pwdReRef.current.blur()
        pwdRef.current.value=""
        pwdRef.current.focus()
        pwdRef.current.blur()
        emailRef.current.value=""
        emailRef.current.focus()
        emailRef.current.blur()
        nameRef.current.focus()
        nameRef.current.value=""
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
            <Button onClick={handleRegister} value="Register"/>
            <p>
                Have an account?&nbsp;
                <Hyperlink href="/login" value="Login"/>
            </p>
        </div>
    )
}

export default Register;