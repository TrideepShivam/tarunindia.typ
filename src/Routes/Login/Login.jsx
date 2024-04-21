import { useContext, useRef, useState } from 'react';
import Button from '../../Components/Button/Button';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Login.css'
import MsgBox from '../../Components/MsgBox/MsgBox';
import api from '../../api';
import { Context } from '../../ContextAPI';
import { Navigate } from 'react-router-dom';
 
const Login=()=>{
    const {setUserLocal} = useContext(Context)
    const {userDetails} = useContext(Context)
    const [msg,setMsg] = useState(false)

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
        }).catch(({response}) => {
            console.log(response.data);
        });

        pwdRef.current.value=""
        pwdRef.current.focus()
        pwdRef.current.blur()
        emailRef.current.focus()
        emailRef.current.value=""
    }
    if(userDetails){
        return <Navigate to={'/dashboard'}/>
    }

    return(
        <div className="loginContainer">
            <h2 className='highlight'>Login</h2>
            <Textbox var={emailRef} type="text" legend="Email"/>
            <Textbox var={pwdRef} type="Password" legend="Password"/>
            <Hyperlink href="/forgot-password" value="Forgot Password?"/>
            <Button onClick={handleLogin} value="Login"/>
            {msg.isOpen&&<MsgBox setMsg={setMsg} data={msg}/>}
            <p>
                Don't have an account?&nbsp;
                <Hyperlink href="/register" value="Register"/>
            </p>
        </div>
    )
}

export default Login;