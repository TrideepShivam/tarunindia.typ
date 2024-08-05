import { useContext, useState } from 'react';
import './Users.css'
import { Context } from '../../../ContextAPI';
import Profile from '../../../assets/pexels.jpg'
import UserNavigation from './userNavigation/UserNavigation';
import api from '../../../api';

const userNavigator =[
    {
        id:'0',value:'Profile',href:'/profile',action:()=>{
            console.log("clicked profile")
        },
        icons:[
            "https://img.icons8.com/ios-filled/50/FFFFFF/test-account.png",
            "https://img.icons8.com/ios-filled/50/000000/test-account.png"
        ]
    },
    {
        id:'0',value:'Settings',href:'/settings',action:()=>{
            console.log("clicked settings")
        },
        icons:[
            "https://img.icons8.com/ios-filled/50/FFFFFF/settings.png",
            "https://img.icons8.com/ios-filled/50/000000/settings.png"
        ]
    },
    {
        id:'0',value:'Logout',href:'/login',action:()=>{
            console.log("clicked logout")
            logout()
        },
        icons:[
            "https://img.icons8.com/ios-filled/50/FFFFFF/exit.png",
            "https://img.icons8.com/ios-filled/50/000000/exit.png"
        ]
    }
]
const Users=()=>{
    const {lightMode,setUserLocal,userDetails,setMsg} = useContext(Context);
    const [openUser,setOpenUser]=useState(false)
    const userNavigator =[
        {
            id:'0',value:'Profile',href:'/profile',action:()=>{
                console.log("clicked profile")
            },
            icons:[
                "https://img.icons8.com/ios-filled/50/FFFFFF/test-account.png",
                "https://img.icons8.com/ios-filled/50/000000/test-account.png"
            ]
        },
        {
            id:'0',value:'Settings',href:'/settings',action:()=>{
                console.log("clicked settings")
            },
            icons:[
                "https://img.icons8.com/ios-filled/50/FFFFFF/settings.png",
                "https://img.icons8.com/ios-filled/50/000000/settings.png"
            ]
        },
        {
            id:'0',value:'Logout',href:'/dashboard',action:()=>{
                console.log("clicked logout")
                logout()
            },
            icons:[
                "https://img.icons8.com/ios-filled/50/FFFFFF/exit.png",
                "https://img.icons8.com/ios-filled/50/000000/exit.png"
            ]
        }
    ]
    const arrow =!lightMode?"https://img.icons8.com/ios-filled/25/000000/back.png":
        "https://img.icons8.com/ios-filled/25/ffffff/back.png"
    const logout =()=>{
        api.get('/auth/logout')
        .then(({data})=>{
            setMsg({
                isOpen:true,
                status:data.state,
                message:data.message
            })
            localStorage.removeItem('USER_DETAILS')
            setUserLocal(false)
        }).catch((response)=>{
            setMsg({
                isOpen:true,
                status:response.state,
                message:response.message
            })
            console.log(response)
        })
    }

    return(
        <div className="userContainer" onClick={()=>setOpenUser(!openUser)}>
            <p className="highlight">Hi, {userDetails.user.name}</p>
            <img 
                style={{transform:openUser?'rotate(90deg)':'rotate(270deg)'}} 
                width="15em" height="15em" src={arrow} alt="arrow"
            />
            {openUser&& <div className="user">
                <img width="100%" src={Profile} alt="" />
                <hr className='divider'/>
                {userNavigator.map((item,index)=>
                    <UserNavigation item={item} key={index}/>
                )}
            </div> }
        </div>
    )
}

export default Users;