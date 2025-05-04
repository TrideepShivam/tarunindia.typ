import { useRouteError } from 'react-router-dom';
import Logo from '../../assets/logo-reverse.svg';
import Hyperlink from '../../components/hyperlink/Hyperlink';

import './Error.css';

const NotFound = ({ label = 'Something went Wrong' }) => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="errorContainer">
            <img width={'100em'} src={Logo} alt="logo" />
            <p>{label}</p>
            <Hyperlink value="Back to Home" href="/" />
        </div>
    );
};

export default NotFound;
