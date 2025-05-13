import { useContext, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../api';
import Button from '../../components/button/Button';
import Checkbox from '../../components/checkbox/Checkbox';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Loading from '../../components/loading/Loading';
import MainFormContainer from '../../components/mainFormContainer/MainFormContainer';
import Textbox from '../../components/textbox/Textbox';
import { Context } from '../../ContextAPI';
import backgroundImg from './../../assets/register-form-image.jpeg';

import './Register.css';

const Register = () => {
    const { userDetails, setMsg } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [isRequested, setIsRequested] = useState(false);
    const [email, setEmail] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const tncRef = useRef(false);
    const handleRegister = () => {
        setEmail(emailRef.current.value);
        setLoading(true);
        api.post('/auth/register', {
            name: nameRef.current.value,
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
                    nameRef.current.value = '';
                    nameRef.current.focus();
                }
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
                setMsg({
                    status: response.data ? response.data.state : 'Error',
                    message: response.data ? response.data.message : 'Server Error. Try again',
                });
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
            heading="Register"
            subheading="Join typ-A-thon today by filling in your details"
        >
            {!isRequested ? (
                <>
                    <Textbox autofocus={true} var={nameRef} type="text" legend="Full Name" />
                    <Textbox var={emailRef} type="text" legend="Email" />
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Checkbox checkedRef={tncRef} value="Agree" transparent={true} />
                        <Hyperlink href="/tnc" value="TnC" />
                        <p style={{ fontSize: '1.2em' }}>&nbsp;and&nbsp;</p>
                        <Hyperlink href="/privacy-policy" value="Privacy Policy" />
                    </div>
                    <Button onClick={handleRegister} value="Register" />
                    <p>
                        Have an account?&nbsp;
                        <Hyperlink href="/login" value="Login" />
                    </p>
                </>
            ) : (
                <>
                    <h1 className="highlight">Thank You</h1>
                    <p>Password Generation Link will be sent to</p>
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

export default Register;
