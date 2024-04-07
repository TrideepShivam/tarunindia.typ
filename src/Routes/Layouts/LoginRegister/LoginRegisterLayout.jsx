import { Outlet } from 'react-router-dom';
import './LoginRegisterLayout.css'
import logo from '../../../assets/logo-reverse.svg'
import TopNavigation from '../../../Components/Navigation/TopNavigation/TopNavigation';
 
const LoginRegisterLayout=()=>{
    return(
        <div className="container">
            <TopNavigation/>
            <div className="form">
                <Outlet/>
            </div>
        </div>
    )
}

export default LoginRegisterLayout;