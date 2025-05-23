import { useContext, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../api';
import Button from '../../components/button/Button';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Loading from '../../components/loading/Loading';
import MainFormContainer from '../../components/mainFormContainer/MainFormContainer';
import Textbox from '../../components/textbox/Textbox';
import { Context } from '../../ContextAPI';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import backgroundImg from './../../assets/login-form-image.png';

import './Login.css';

const Login = () => {
    useAuthInterceptor();
    const { userDetails, setUserLocal, setMsg } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const pwdRef = useRef();

    const handleLogin = () => {
        setLoading(true);
        api.post('/auth/login', {
            email: emailRef.current.value,
            password: pwdRef.current.value,
        })
            .then((response) => {
                setMsg({
                    status: response.data.state,
                    message: response.data.message,
                });
                setUserLocal(response.data);
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
            heading="Login"
            subheading="Access your typ-A-thon account by entering your credentials"
        >
            <Textbox autofocus={true} var={emailRef} type="text" legend="Email" />
            <Textbox var={pwdRef} type="Password" legend="Password" />
            <Hyperlink href="/forgot-password" value="Forgot Password?" />
            <Button onClick={handleLogin} value="Login" />
            <p>
                Don't have an account?&nbsp;
                <Hyperlink href="/register" value="Register" />
            </p>
        </MainFormContainer>
    );
};

export default Login;
