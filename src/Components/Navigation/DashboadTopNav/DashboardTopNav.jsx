import './DashboardTopNav.css'
import logo from '../../../assets/logo-reverse.svg'
import ToggleDarkLight from '../../ToggleDarkLight/ToggleDarkLight';
import { useContext } from 'react';
import { Context } from '../../../ContextAPI';
const DashboardTopNav=()=>{
    const {lightMode} = useContext(Context);
    
    const closebtn = <img width="25" height="25" src={
        lightMode?"https://img.icons8.com/ios/25/000000/delete-sign--v1.png":
                "https://img.icons8.com/ios/25/ffffff/delete-sign--v1.png"
    } alt="close"/>

    return(
        <div className="topNavigation">
            <div className='navElement'><h3 className='navMenuButton'>&#9776;</h3></div>
            <div className='navElement'><img width="50em" src={logo} alt="Logo" /></div>
            <div className='navElement'><ToggleDarkLight/></div>
        </div>
    )
}

export default DashboardTopNav;