import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Login.css'
 
const Login=()=>{
    

    return(
        <div className="loginContainer">
            <h2>Login</h2>
            <Textbox type="text" legend="Email"/>
            <Textbox type="Password" legend="Password"/>
            <Hyperlink href="/forgot-password" value="Forgot Password?"/>
        </div>
    )
}

export default Login;