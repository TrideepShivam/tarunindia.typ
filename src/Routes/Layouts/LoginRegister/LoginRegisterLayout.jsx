import { Outlet } from 'react-router-dom';
import './LoginRegisterLayout.css'
import logo from '../../../assets/logo-reverse.svg'
 
const LoginRegisterLayout=()=>{
    return(
        <div className="container">
            <img width="50em" src={logo} alt="Logo" />
            <Outlet/>
        </div>
    )
}

export default LoginRegisterLayout;