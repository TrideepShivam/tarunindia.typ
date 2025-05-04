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
    const { userDetails, msg, setMsg } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const tncRef = useRef(false);
    const handleRegister = () => {
        setLoading(true);
        api.post('/auth/register', {
            name: nameRef.current.value,
            email: emailRef.current.value,
        })
            .then(({ data }) => {
                setMsg({
                    ...msg,
                    isOpen: true,
                    status: data.state,
                    message: data.message,
                });
                emailRef.current.value = '';
                nameRef.current.value = '';
                nameRef.current.focus();
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
                setMsg({
                    isOpen: true,
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
            <Textbox autofocus={true} var={nameRef} type="text" legend="Full Name" />
            <Textbox var={emailRef} type="text" legend="Email" />
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <Checkbox checkedRef={tncRef} value="Agree" transparent={true} />
                <Hyperlink href="/tnc" value="Terms and Conditions" />
                <p style={{ fontSize: '1.2em' }}>&nbsp;and&nbsp;</p>
                <Hyperlink href="/privacy-policy" value="Privacy Policy" />
            </div>
            <Button onClick={handleRegister} value="Register" />
            <p>
                Have an account?&nbsp;
                <Hyperlink href="/login" value="Login" />
            </p>
        </MainFormContainer>
    );
};

export default Register;
