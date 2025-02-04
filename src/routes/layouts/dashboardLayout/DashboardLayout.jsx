import { Navigate, Outlet } from 'react-router-dom';
import './DashboardLayout.css'
import DashboardTopNav from '../../../components/navigation/dashboadTopNav/DashboardTopNav';
import SideNavigation from '../../../components/navigation/sideNavigation/SideNavigation';
import { useContext, useState } from 'react';
import api from '../../../api';
import { Context } from '../../../ContextAPI';
import useAuthInterceptor from '../../../hooks/useAuthInterceptor';
import Hyperlink from '../../../components/hyperlink/Hyperlink';


const DashboardLayout=()=>{
    let darkThemeColor = import.meta.env.VITE_APP_DARK_THEME||'#00aaff'
    let lightThemeColor= import.meta.env.VITE_APP_LIGHT_THEME||'#5500ff'
    console.log(darkThemeColor)
    const {userDetails,setUserLocal,setMsg,responsive} = useContext(Context)
    const [sideNavOpen,setSideNavOpen]=useState(responsive?false:true)
    const sideMenu = [//0:green 1:blue 2:white 3:black
        {
            href:"/dashboard",
            value:"DASHBOARD",
            icons:[
                `https://img.icons8.com/ios-filled/30/${darkThemeColor.replace('#','')}/performance-macbook.png`,
                `https://img.icons8.com/ios-filled/30/${lightThemeColor.replace('#','')}/performance-macbook.png`,
                "https://img.icons8.com/ios-filled/30/fefeff/performance-macbook.png",
                "https://img.icons8.com/ios-filled/30/101010/performance-macbook.png",
            ]
        },
        {
            href:"/playground",
            value:"PLAYGROUND",
            icons:[
                `https://img.icons8.com/ios-filled/30/${darkThemeColor.replace('#','')}/key-press.png`,
                `https://img.icons8.com/ios-filled/30/${lightThemeColor.replace('#','')}/key-press.png`,
                "https://img.icons8.com/ios-filled/30/fefeff/key-press.png",
                "https://img.icons8.com/ios-filled/30/101010/key-press.png"
            ]
        },
        {
            href:"/events",
            value:"EVENTS",
            icons:[
                `https://img.icons8.com/ios-glyphs/30/${darkThemeColor.replace('#','')}/confetti--v1.png`,
                `https://img.icons8.com/ios-glyphs/30/${lightThemeColor.replace('#','')}/confetti--v1.png`,
                "https://img.icons8.com/ios-glyphs/30/fefeff/confetti--v1.png",
                "https://img.icons8.com/ios-glyphs/30/101010/confetti--v1.png"
            ]
        },
        {
            href:"/leaderboard",
            value:"LEADERBOARD",
            icons:[
                `https://img.icons8.com/ios-filled/30/${darkThemeColor.replace('#','')}/leaderboard.png`,
                `https://img.icons8.com/ios-filled/30/${lightThemeColor.replace('#','')}/leaderboard.png`,
                "https://img.icons8.com/ios-filled/30/fefeff/leaderboard.png",
                "https://img.icons8.com/ios-filled/30/101010/leaderboard.png"
            ]
        },
        {
            href:"/results",
            value:"RESULTS",
            icons:[
                `https://img.icons8.com/ios-glyphs/30/${darkThemeColor.replace('#','')}/improvement.png`,
                `https://img.icons8.com/ios-glyphs/30/${lightThemeColor.replace('#','')}/improvement.png`,
                "https://img.icons8.com/ios-glyphs/30/fefeff/improvement.png",
                "https://img.icons8.com/ios-glyphs/30/101010/improvement.png"
            ]
        },
        {
            href:"/support",
            value:"SUPPORT",
            icons:[
                `https://img.icons8.com/ios-glyphs/30/${darkThemeColor.replace('#','')}/customer-support.png`,
                `https://img.icons8.com/ios-glyphs/30/${lightThemeColor.replace('#','')}/customer-support.png`,
                "https://img.icons8.com/ios-glyphs/30/fefeff/customer-support.png",
                "https://img.icons8.com/ios-glyphs/30/101010/customer-support.png"
            ]
        },
        {
            href:"/about",
            value:"ABOUT",
            icons:[
                `https://img.icons8.com/ios-glyphs/30/${darkThemeColor.replace('#','')}/info-squared.png`,
                `https://img.icons8.com/ios-glyphs/30/${lightThemeColor.replace('#','')}/info-squared.png`,
                "https://img.icons8.com/ios-glyphs/30/fefeff/info-squared.png",
                "https://img.icons8.com/ios-glyphs/30/101010/info-squared.png"
            ]
        }
    ]
    const userNavigator =[
        {
            id:'0',value:'Profile',href:'/profile',
            action:()=>{
                console.log("clicked profile")
            },
            icons:[
                "https://img.icons8.com/ios-filled/50/FFFFFF/test-account.png",
                "https://img.icons8.com/ios-filled/50/000000/test-account.png"
            ]
        },{
            id:'1',value:'Pricing',href:'/dashboard/pricing',
            action:()=>{
                console.log("clicked pricing")
            },
            icons:[
                "https://img.icons8.com/ios-filled/50/ffffff/tags.png",
                "https://img.icons8.com/ios-filled/50/000000/tags.png"
            ]
        },
        {
            id:'2',value:'Settings',href:'/settings',
            action:()=>{
                console.log("clicked settings")
            },
            icons:[
                "https://img.icons8.com/ios-filled/50/FFFFFF/settings.png",
                "https://img.icons8.com/ios-filled/50/000000/settings.png"
            ]
        },
        {
            id:'3',value:'Logout',href:'/dashboard',
            action:()=>{
                    api.get('/auth/logout')
                    .then(({data})=>{
                        localStorage.removeItem('USER_DETAILS')
                        setUserLocal(false)
                        setMsg({
                            isOpen:true,
                            status:data.state,
                            message:data.message
                        })
                    }).catch((response)=>{
                        // setMsg({
                        //     isOpen:true,
                        //     status:response.state,
                        //     message:response.message
                        // })
                        console.log(response)
                    })
            },
            icons:[
                "https://img.icons8.com/ios-filled/50/FFFFFF/exit.png",
                "https://img.icons8.com/ios-filled/50/000000/exit.png"
            ]
        }
    ]
    if(!userDetails){
        return <Navigate to={'/login'}/>
    }
    return(
        <>
            <DashboardTopNav userNavigator={userNavigator} sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <div className="navContentContainer">
                {(!responsive||sideNavOpen)&&<div onClick={()=>responsive&&setSideNavOpen(false)} className="sideNavContainer" style={{width:responsive?'':sideNavOpen?"14em":"4.5em"}}>
                    <SideNavigation sideNavOpen={sideNavOpen} sideMenu={sideMenu}/>
                    {sideNavOpen&&<div style={{position:'absolute',bottom:'1em',left:responsive?'2.5em':'1.5em'}}>
                        <Hyperlink href='/' value='tarunindia.in'/>
                    </div>}
                </div>}
                <div 
                    className="mainContentContainer" 
                    style={{width:responsive?'100%':sideNavOpen?"calc(100% - 14.5em)":"calc(100% - 5em)"}}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;