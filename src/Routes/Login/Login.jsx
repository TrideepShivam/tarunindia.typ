import { useRef } from 'react';
import Button from '../../Components/Button/Button';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Login.css'
 
const Login=()=>{
    const emailRef = useRef()
    const pwdRef = useRef()
    const handleLogin=()=>{
        console.log(emailRef.current.value+" "+pwdRef.current.value);
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
            <p>
                Don't have an account?&nbsp;
                <Hyperlink href="/register" value="Register"/>
            </p>
        </div>
    )
}

export default Login;