import './Error.css';
import Logo from '../../assets/logo-reverse.svg';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import { useRouteError } from 'react-router-dom';

const NotFound = ({ label = 'Something went Wrong' }) => {
    const error = useRouteError();
    return (
        <div className="errorContainer">
            <img width={'100em'} src={Logo} alt="logo" />
            <p>{label}</p>
            <Hyperlink value="Back to Home" href="/" />
        </div>
    );
};

export default NotFound;
