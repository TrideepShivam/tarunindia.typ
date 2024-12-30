import { Outlet } from 'react-router-dom';
import './LoginRegisterLayout.css'
import TopNavigation from '../../../components/navigation/topNavigation/TopNavigation';
 
const LoginRegisterLayout=()=>{
    return(
        <div className="container">
            <TopNavigation/>
            <div className="formContainer">
                <Outlet/>
            </div>
        </div>
    )
}

export default LoginRegisterLayout;