import { Outlet } from 'react-router-dom';
import './DashboardLayout.css'
import DashboardTopNav from '../../../Components/Navigation/DashboadTopNav/DashboardTopNav';
import SideNavigation from '../../../Components/Navigation/SideNavigation/SideNavigation';
import { useEffect, useState } from 'react';
 
const DashboardLayout=()=>{
    const [sideNavOpen,setSideNavOpen]=useState(true)
    
    return(
        <>
            <DashboardTopNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <div className="navContentContainer">
                <div className="sideNavContainer">
                    <SideNavigation sideNavOpen={sideNavOpen}/>
                </div>
                <div className="mainContentContainer">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;