import Button from '../../Components/Button/Button';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import Textbox from '../../Components/Textbox/Textbox';
import './Login.css'
 
const Login=()=>{
    
    const handleLogin=()=>{
        console.log("clicked");
    }

    return(
        <div className="loginContainer">
            <h2>Login</h2>
            <Textbox type="text" legend="Email"/>
            <Textbox type="Password" legend="Password"/>
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