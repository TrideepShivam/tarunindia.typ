import './InProgress.css';
import Logo from '../../assets/logo-reverse.svg';
import Hyperlink from '../../components/hyperlink/Hyperlink';

const InProgress = ({ value = 'Back to Home', href = '/' }) => {
    return (
        <div className="inProgressContainer">
            <img width="100em" src={Logo} alt="logo" />
            <h2>🚧 Page Under Construction</h2>
            <p>We’re building something amazing. Stay tuned!</p>
            <Hyperlink value={value} href={href} />
        </div>
    );
};

export default InProgress;
