import './DashboardTopNav.css'
import logo from '../../../assets/logo-reverse.svg'
import ToggleDarkLight from '../../ToggleDarkLight/ToggleDarkLight';
import { useContext } from 'react';
import { Context } from '../../../ContextAPI';

const DashboardTopNav=({sideNavOpen,setSideNavOpen})=>{
    const {lightMode} = useContext(Context);
    
    const menu = !sideNavOpen?
        !lightMode?"https://img.icons8.com/ios-filled/50/000000/menu--v6.png":
                "https://img.icons8.com/ios-filled/50/ffffff/menu--v6.png":
        !lightMode?"https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png":
                "https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png"

    return(
        <div className="topNavigation">
            <div className='navElement'>
                <img onClick={()=>setSideNavOpen(!sideNavOpen)} width="25" height="25" src={menu} alt="menu"/>               
            </div>
            <div className='navElement'><img width="40em" src={logo} alt="Logo" /></div>
            <div className='navElement'><ToggleDarkLight/></div>
        </div>
    )
}

export default DashboardTopNav;