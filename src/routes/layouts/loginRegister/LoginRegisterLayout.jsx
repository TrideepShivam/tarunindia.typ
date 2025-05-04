import { Outlet } from 'react-router-dom';
import TopNavigation from '../../../components/navigation/topNavigation/TopNavigation';
import useScrollToTop from '../../../hooks/useScrollToTop';

import './LoginRegisterLayout.css';

const LoginRegisterLayout = () => {
    useScrollToTop();

    return (
        <div className="container">
            <TopNavigation />
            <div className="formContainer">
                <Outlet />
            </div>
        </div>
    );
};

export default LoginRegisterLayout;
