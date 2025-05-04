import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../../ContextAPI';
import useAuthInterceptor from '../../../../hooks/useAuthInterceptor';

import './UserNavigation.css';

const UserNavigation = ({ item }) => {
    const { lightMode } = useContext(Context);
    useAuthInterceptor();
    return (
        <Link className="userNavigation" to={item.href && item.href} onClick={() => item.action()}>
            <img width="25px" src={item.icons[lightMode ? 0 : 1]} alt="menu" />
            <span>{item.value}</span>
        </Link>
    );
};

export default UserNavigation;
