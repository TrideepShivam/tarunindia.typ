import Textbox from '../../Components/Textbox/Textbox';
import './Login.css'
 
const Login=()=>{
    

    return(
        <div className="loginContainer">
            <h2>Login</h2>
            <Textbox type="text" legend="Email"/>
        </div>
    )
}

export default Login;