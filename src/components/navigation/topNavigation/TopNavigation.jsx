import './TopNavigation.css';
import logo from '../../../assets/logo-reverse.svg';
import ToggleDarkLight from '../../toggleDarkLight/ToggleDarkLight';
import Hyperlink from '../../hyperlink/Hyperlink';
import { useContext, useState } from 'react';
import { Context } from '../../../ContextAPI';
import CircleButton from '../../circleButton/CircleButton';
const TopNavigation = () => {
    const { responsive, lightMode } = useContext(Context);
    const [navOpen, setNavOpen] = useState(false);
    const closeBtn = (
        <img
            width="25"
            height="25"
            src={
                !lightMode
                    ? 'https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png'
                    : 'https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png'
            }
            alt="back"
        />
    );
    const topNavMenu = [
        { name: 'Home', path: '/' },
        { name: 'Contents', path: '/contents' }, // TODO: replace with when required https://tarunindia.in/courses
        { name: 'About', path: '/about-us' },
        { name: 'Contact', path: '/contact-us' },
        { name: 'Pricing', path: '/pricing' },
    ];
    return (
        <div className="topNavigation">
            <img width="50em" src={logo} alt="Logo" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {(!responsive || navOpen) && (
                    <div className="navSlab">
                        {responsive && (
                            <CircleButton
                                style={{ left: '1em', top: '1em' }}
                                value={closeBtn}
                                onClick={() => setNavOpen(false)}
                            />
                        )}
                        {topNavMenu.map((a, index) => (
                            <Hyperlink
                                type={a.name == 'Pricing' ? 'bordered-theme' : 'trans-hover'}
                                key={index}
                                href={a.path}
                                value={a.name}
                                onClick={() => setNavOpen(false)}
                            />
                        ))}
                        {responsive && (
                            <Hyperlink
                                type="themed"
                                href="/login"
                                value="Get Started"
                                onClick={() => setNavOpen(false)}
                            />
                        )}
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {responsive && (
                    <p className="navMenuButton" onClick={() => setNavOpen(!navOpen)}>
                        &#9776;
                    </p>
                )}
                {!responsive && (
                    <Hyperlink type="themed" href="/login" value="Get Started" onClick={() => setNavOpen(false)} />
                )}
                <ToggleDarkLight />
            </div>
        </div>
    );
};

export default TopNavigation;
