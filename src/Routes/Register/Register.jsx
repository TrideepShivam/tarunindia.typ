import { useRef } from 'react';
import Button from '../../Components/Button/Button';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Register.css'
 
const Register=()=>{
    const nameRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()
    const pwdReRef = useRef()
    const handleRegister=()=>{
        console.log(nameRef.current.value+" "+emailRef.current.value+" "+pwdRef.current.value);
        console.log(pwdRef.current.value==pwdReRef.current.value);
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