import { Navigate, Outlet } from 'react-router-dom';
import './DashboardLayout.css'
import DashboardTopNav from '../../../components/navigation/dashboadTopNav/DashboardTopNav';
import SideNavigation from '../../../components/navigation/sideNavigation/SideNavigation';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../ContextAPI';
 
const DashboardLayout=()=>{
    const [sideNavOpen,setSideNavOpen,msg,setMsg]=useState(true)
    const {userDetails} = useContext(Context)
    if(!userDetails){
        return <Navigate to={'/login'}/>
    }
    return(
        <>
            <DashboardTopNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <div className="navContentContainer">
                <div className="sideNavContainer" style={{width:sideNavOpen?"14em":"4.5em"}}>
                    <SideNavigation sideNavOpen={sideNavOpen}/>
                </div>
                <div 
                    className="mainContentContainer" 
                    style={{width:sideNavOpen?"calc(100% - 14.5em)":"calc(100% - 5em)"}}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;