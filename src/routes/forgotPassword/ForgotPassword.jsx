import { useContext, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../api';
import Button from '../../components/button/Button';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Loading from '../../components/loading/Loading';
import MainFormContainer from '../../components/mainFormContainer/MainFormContainer';
import Retry from '../../components/retry/Retry';
import Textbox from '../../components/textbox/Textbox';
import { Context } from '../../ContextAPI';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import backgroundImg from './../../assets/forgot-password-image.jpeg';

import './setAndForgot.css';

const FortgotPassword = () => {
    useAuthInterceptor();
    const { userDetails, setMsg } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [isRequested, setIsRequested] = useState(false);
    const emailRef = useRef();

    const handleForgotPassword = () => {
        setEmail(emailRef.current.value);
        setLoading(true);
        api.post('/auth/update-password', {
            email: emailRef.current.value,
        })
            .then((response) => {
                setMsg({
                    status: response.data.state,
                    message: response.data.message,
                });
                if (response.status == 200) {
                    setIsRequested(true);
                } else {
                    emailRef.current.value = '';
                    emailRef.current.focus();
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    if (loading) {
        return <Loading />;
    }
    if (userDetails) {
        return (
            <>
                <Navigate to={'/dashboard'} />
            </>
        );
    }
    return (
        <MainFormContainer
            img={backgroundImg}
            heading="Forgot Password"
            subheading="Trouble logging in? Enter your email to generate new one"
        >
            {!isRequested ? (
                <>
                    <Textbox autofocus={true} var={emailRef} type="text" legend="Email" />
                    <Button onClick={handleForgotPassword} value="Submit" />
                    <p>or</p>
                    <Hyperlink href="/login" value="Login" />
                </>
            ) : (
                <>
                    <h1 className="highlight">Thank You</h1>
                    <p>Password reset Link will be sent to</p>
                    <Hyperlink
                        value={email}
                        href="#"
                        type="trans-hover"
                        style={{ border: '.5px solid var(--text-color-light)', fontWeight: 'bold' }}
                    />
                    <p>
                        If mail is not delivered, Check your <span className="highlight">Spam</span> list
                    </p>
                    <p>
                        Waiting time upto <span className="highlight">5 mins</span>
                    </p>
                    <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                        <Hyperlink type="bordered-theme" href="/login" value="Login" />
                        <Hyperlink href="#" onClick={() => setIsRequested(false)} value="Try Again" />
                    </div>
                </>
            )}
        </MainFormContainer>
    );
};

export default FortgotPassword;
