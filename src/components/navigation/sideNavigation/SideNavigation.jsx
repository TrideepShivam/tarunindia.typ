import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './navigation/Navigation';

import './SideNavigation.css';

const SideNavigation = ({ sideMenu, sideNavOpen }) => {
    const [clickedMenu, setClickedMenu] = useState(0);
    var location = useLocation();
    useEffect(() => {
        const index = sideMenu.findIndex((item) => item.href === location.pathname);
        setClickedMenu(index !== -1 ? index : null);
    }, [location.pathname]);
    return (
        <div className="sideNavigation" style={{ borderColor: sideNavOpen ? 'transparent' : 'var(--theme-color)' }}>
            {sideMenu.map((item, index) => (
                <Navigation
                    sideNavOpen={sideNavOpen}
                    isClicked={clickedMenu == index}
                    setClickedMenu={setClickedMenu}
                    key={index}
                    id={index}
                    menu={item}
                />
            ))}
        </div>
    );
};

export default SideNavigation;
