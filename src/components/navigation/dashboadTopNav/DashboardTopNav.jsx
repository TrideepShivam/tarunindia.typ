import { useContext } from 'react';
import logo from '../../../assets/logo-reverse.svg';
import { Context } from '../../../ContextAPI';
import ToggleDarkLight from '../../toggleDarkLight/ToggleDarkLight';
import Users from '../users/Users';

import './DashboardTopNav.css';

const DashboardTopNav = ({ userNavigator, sideNavOpen, setSideNavOpen }) => {
    const { lightMode, responsive } = useContext(Context);

    const menu = !sideNavOpen
        ? !lightMode
            ? 'https://img.icons8.com/ios-filled/50/000000/menu--v6.png'
            : 'https://img.icons8.com/ios-filled/50/ffffff/menu--v6.png'
        : !lightMode
          ? 'https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png'
          : 'https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png';

    return (
        <div className="dashboardTopNavigation">
            <div className="navElement">
                {responsive && <img width="40em" src={logo} alt="Logo" />}
                <img
                    className="menuButton"
                    onClick={() => setSideNavOpen(!sideNavOpen)}
                    width="25"
                    height="25"
                    src={menu}
                    alt="menu"
                />
            </div>
            {!responsive && (
                <div className="navElement">
                    <img width="40em" src={logo} alt="Logo" />
                </div>
            )}
            <div className="navElement">
                <Users userNavigator={userNavigator} />
                <ToggleDarkLight />
            </div>
        </div>
    );
};

export default DashboardTopNav;
