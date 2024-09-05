import { Link } from 'react-router-dom';
import './TopNavigation.css'
import logo from '../../../assets/logo-reverse.svg'
import ToggleDarkLight from '../../toggleDarkLight/ToggleDarkLight';
const TopNavigation=()=>{
    const arr=[{name:"Home",path:"/",color:false},{name:"Login",path:"/login",color:true},{name:"Register",path:"/register",color:true}];
    return(
        <div className="topNavigation">
            <img width="50em" src={logo} alt="Logo" />
               
                <div className="navSlab">
                    {arr.map((a,index)=><Link key={index} className={`${a.color? "bluegoto":"goto"}`} to={a.path}>{a.name}</Link>)}
                    <ToggleDarkLight/>
                </div>
            
        </div>
    )
}

export default TopNavigation;