import { Navigate, Outlet } from 'react-router-dom';
import './AdminDashboardLayout.css';
import DashboardTopNav from '../../../components/navigation/dashboadTopNav/DashboardTopNav';
import SideNavigation from '../../../components/navigation/sideNavigation/SideNavigation';
import { useContext, useState } from 'react';
import api from '../../../api';
import { Context } from '../../../ContextAPI';

const DashboardLayout = () => {
    const [sideNavOpen, setSideNavOpen] = useState(true);
    const { userDetails, setUserLocal, setMsg } = useContext(Context);
    const sideMenu = [
        //0:green 1:blue 2:white 3:black
        {
            href: '/admin/dashboard',
            value: 'DASHBOARD',
            icons: [
                'https://img.icons8.com/ios-filled/30/00ff85/performance-macbook.png',
                'https://img.icons8.com/ios-filled/30/5000ff/performance-macbook.png',
                'https://img.icons8.com/ios-filled/30/fefeff/performance-macbook.png',
                'https://img.icons8.com/ios-filled/30/101010/performance-macbook.png',
            ],
        },
        {
            href: '/admin/announcements',
            value: 'ANNOUNCEMENTS',
            icons: [
                'https://img.icons8.com/ios-filled/30/00ff85/key-press.png',
                'https://img.icons8.com/ios-filled/30/5000ff/key-press.png',
                'https://img.icons8.com/ios-filled/30/fefeff/key-press.png',
                'https://img.icons8.com/ios-filled/30/101010/key-press.png',
            ],
        },
        {
            href: '/admin/events',
            value: 'EVENTS',
            icons: [
                'https://img.icons8.com/ios-glyphs/30/00ff85/confetti--v1.png',
                'https://img.icons8.com/ios-glyphs/30/5000ff/confetti--v1.png',
                'https://img.icons8.com/ios-glyphs/30/fefeff/confetti--v1.png',
                'https://img.icons8.com/ios-glyphs/30/101010/confetti--v1.png',
            ],
        },
        {
            href: '/admin/leaderboard',
            value: 'LEADERBOARD',
            icons: [
                'https://img.icons8.com/ios-filled/30/00ff85/leaderboard.png',
                'https://img.icons8.com/ios-filled/30/5000ff/leaderboard.png',
                'https://img.icons8.com/ios-filled/30/fefeff/leaderboard.png',
                'https://img.icons8.com/ios-filled/30/101010/leaderboard.png',
            ],
        },
        {
            href: '/admin/users',
            value: 'USERS',
            icons: [
                'https://img.icons8.com/ios-glyphs/30/00ff85/improvement.png',
                'https://img.icons8.com/ios-glyphs/30/5000ff/improvement.png',
                'https://img.icons8.com/ios-glyphs/30/fefeff/improvement.png',
                'https://img.icons8.com/ios-glyphs/30/101010/improvement.png',
            ],
        },
        {
            href: '/admin/connects',
            value: 'CONNECTS',
            icons: [
                'https://img.icons8.com/ios-glyphs/30/00ff85/customer-support.png',
                'https://img.icons8.com/ios-glyphs/30/5000ff/customer-support.png',
                'https://img.icons8.com/ios-glyphs/30/fefeff/customer-support.png',
                'https://img.icons8.com/ios-glyphs/30/101010/customer-support.png',
            ],
        },
        {
            href: '/admin/requests',
            value: 'REQUESTS',
            icons: [
                'https://img.icons8.com/ios-glyphs/30/00ff85/info-squared.png',
                'https://img.icons8.com/ios-glyphs/30/5000ff/info-squared.png',
                'https://img.icons8.com/ios-glyphs/30/fefeff/info-squared.png',
                'https://img.icons8.com/ios-glyphs/30/101010/info-squared.png',
            ],
        },
        {
            href: '/admin/about',
            value: 'ABOUT',
            icons: [
                'https://img.icons8.com/ios-glyphs/30/00ff85/info-squared.png',
                'https://img.icons8.com/ios-glyphs/30/5000ff/info-squared.png',
                'https://img.icons8.com/ios-glyphs/30/fefeff/info-squared.png',
                'https://img.icons8.com/ios-glyphs/30/101010/info-squared.png',
            ],
        },
    ];
    const userNavigator = [
        {
            id: '0',
            value: 'Profile',
            href: '/profile',
            action: () => {
                console.log('clicked profile');
            },
            icons: [
                'https://img.icons8.com/ios-filled/50/FFFFFF/test-account.png',
                'https://img.icons8.com/ios-filled/50/000000/test-account.png',
            ],
        },
        {
            id: '0',
            value: 'Settings',
            href: '/settings',
            action: () => {
                console.log('clicked settings');
            },
            icons: [
                'https://img.icons8.com/ios-filled/50/FFFFFF/settings.png',
                'https://img.icons8.com/ios-filled/50/000000/settings.png',
            ],
        },
        {
            id: '0',
            value: 'Logout',
            href: '/login',
            action: () => {
                api.get('/auth/logout')
                    .then(({ data }) => {
                        localStorage.removeItem('USER_DETAILS');
                        setUserLocal(false);
                        setMsg({
                            isOpen: true,
                            status: data.state,
                            message: data.message,
                        });
                    })
                    .catch((response) => {
                        // setMsg({
                        //     isOpen:true,
                        //     status:response.state,
                        //     message:response.message
                        // })
                        console.log(response);
                    });
            },
            icons: [
                'https://img.icons8.com/ios-filled/50/FFFFFF/exit.png',
                'https://img.icons8.com/ios-filled/50/000000/exit.png',
            ],
        },
    ];
    if (!userDetails) {
        return <Navigate to={'/login'} />;
    }
    return (
        <>
            <DashboardTopNav userNavigator={userNavigator} sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
            <div className="navContentContainer">
                <div className="sideNavContainer" style={{ width: sideNavOpen ? '17em' : '4.5em' }}>
                    <SideNavigation sideNavOpen={sideNavOpen} sideMenu={sideMenu} />
                </div>
                <div
                    className="mainContentContainer"
                    style={{ width: sideNavOpen ? 'calc(100% - 14.5em)' : 'calc(100% - 5em)' }}
                >
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
