import { useContext, useState } from 'react';
import './Users.css'
import { Context } from '../../../ContextAPI';
import Profile from '../../../assets/pexels.jpg'
import UserNavigation from './userNavigation/UserNavigation';

const Users=({userNavigator})=>{
    const {lightMode,setUserLocal,userDetails,setMsg} = useContext(Context);
    const [openUser,setOpenUser]=useState(false)
    
    const arrow =!lightMode?"https://img.icons8.com/ios-filled/25/000000/back.png":
        "https://img.icons8.com/ios-filled/25/ffffff/back.png"

    return(
        <div className="userContainer" onClick={()=>setOpenUser(!openUser)}>
            <p className="highlight">Hi, {userDetails.user.name.split(' ')[0]}</p>
            <img 
                style={{transform:openUser?'rotate(90deg)':'rotate(270deg)'}} 
                width="15em" height="15em" src={arrow} alt="arrow"
            />
            {openUser&& <div className="user">
                <img className='userProfilePic' width="150em" height="150em" src={Profile} alt="" />
                {userNavigator.map((item,index)=>
                    <UserNavigation item={item} key={index}/>
                )}
            </div> }
        </div>
    )
}

export default Users;