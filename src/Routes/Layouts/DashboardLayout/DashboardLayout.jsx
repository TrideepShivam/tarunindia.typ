import { Outlet } from 'react-router-dom';
import './DashboardLayout.css'
import DashboardTopNav from '../../../Components/Navigation/DashboadTopNav/DashboardTopNav';
 
const DashboardLayout=()=>{
    return(
        <>
            <DashboardTopNav/>
            <div className="navContentContainer">
                <Outlet/>
            </div>
        </>
    )
}

export default DashboardLayout;