import { useContext, useRef, useState } from 'react';
import Profile from '../../../assets/logo-reverse.svg';
import { Context } from '../../../ContextAPI';
import useWindowEvents from '../../../hooks/useWindowEvents';
import UserNavigation from './userNavigation/UserNavigation';

import './Users.css';

const Users = ({ userNavigator }) => {
    const { lightMode, userDetails } = useContext(Context);
    const [openUser, setOpenUser] = useState(false);
    const userRef = useRef(null);
    useWindowEvents(userRef, () => setOpenUser(false));
    const arrow = !lightMode
        ? 'https://img.icons8.com/ios-filled/25/000000/back.png'
        : 'https://img.icons8.com/ios-filled/25/ffffff/back.png';

    return (
        <div ref={userRef} className="userContainer" onClick={() => setOpenUser(!openUser)}>
            <p className="highlight">Hi, {userDetails.user.name.split(' ')[0]}</p>
            <img
                style={{ transform: openUser ? 'rotate(90deg)' : 'rotate(270deg)' }}
                width="15em"
                height="15em"
                src={arrow}
                alt="arrow"
            />
            {openUser && (
                <div className="user">
                    <img
                        className="userProfilePic"
                        width="150em"
                        height="150em"
                        src={userDetails.profile_pic_url ? userDetails.profile_pic_url : Profile}
                        alt="profile_pic"
                    />
                    {userNavigator.map((item, index) => (
                        <UserNavigation item={item} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
