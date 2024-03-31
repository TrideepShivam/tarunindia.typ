import { Outlet } from 'react-router-dom';
import './LoginRegisterLayout.css'
 
const LoginRegisterLayout=()=>{
    return(
        <div className="container">
            LoginRegisterLayout
            <br />
            <Outlet/>
        </div>
    )
}

export default LoginRegisterLayout;