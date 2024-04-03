import { Outlet } from 'react-router-dom';
import './DashboardLayout.css'
import DashboardTopNav from '../../../Components/Navigation/DashboadTopNav/DashboardTopNav';
import SideNavigation from '../../../Components/Navigation/SideNavigation/SideNavigation';
import { useState } from 'react';
 
const DashboardLayout=()=>{
    const [sideNavOpen,setSideNavOpen]=useState(true)
    return(
        <>
            <DashboardTopNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <div className="navContentContainer">
                <SideNavigation sideNavOpen={sideNavOpen}/>
                <Outlet/>
            </div>
        </>
    )
}

export default DashboardLayout;