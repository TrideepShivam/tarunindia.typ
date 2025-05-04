import logo from '../../assets/logo-reverse.svg';
import Hyperlink from '../hyperlink/Hyperlink';

import './Retry.css';

const Retry = ({ retry, to }) => {
    return (
        <div className="retryContainer">
            <img width="100px" src={logo} alt="" />
            <p>Connection Interupted or </p>
            <p>Something went wrong.</p>
            {retry && (
                <>
                    <Hyperlink
                        onClick={() => {
                            retry && retry();
                        }}
                        type="buttonLike"
                        value="Retry"
                    />
                </>
            )}
            <p>Or go to</p>
            <Hyperlink
                href={to ? to : '/playground'}
                value={to ? to.replace('/', '').charAt(0).toUpperCase() + to.slice(2) : 'Playground'}
            />
        </div>
    );
};

export default Retry;
