import { Outlet } from 'react-router-dom';
import './LoginRegisterLayout.css'
import logo from '../../../assets/logo-reverse.svg'
import TopNavigation from '../../../Components/Navigation/TopNavigation/TopNavigation';
 
const LoginRegisterLayout=()=>{
    return(
        <div className="container">
            <TopNavigation/>
            <Outlet/>
        </div>
    )
}

export default LoginRegisterLayout;