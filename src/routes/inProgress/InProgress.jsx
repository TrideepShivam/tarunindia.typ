import './InProgress.css';
import Logo from '../../assets/logo-reverse.svg';
import Hyperlink from '../../components/hyperlink/Hyperlink';

const InProgress = () => {
    return (
        <div className="inProgressContainer">
            <img width={'100em'} src={Logo} alt="logo" />
            <h2>🚧 Page Under Construction</h2>
            <p>We’re building something amazing. Stay tuned!</p>
            <Hyperlink value="Back to Home" href="/" />
        </div>
    );
};

export default InProgress;
