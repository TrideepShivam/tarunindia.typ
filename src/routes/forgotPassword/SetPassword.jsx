import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import backgroundImg from '../../assets/new-password-form-image.png';
import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';
import MainFormContainer from '../../components/mainFormContainer/MainFormContainer';
import Textbox from '../../components/textbox/Textbox';
import { Context } from '../../ContextAPI';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';

import './setAndForgot.css';
import Hyperlink from '../../components/hyperlink/Hyperlink';

const SetPassword = () => {
    useAuthInterceptor();
    const [isRequested, setIsRequested] = useState(false);
    const [password, setPassword] = useState('');
    const [isStrong, setIsStrong] = useState(false);
    const { id, token } = useParams();
    const navigate = useNavigate();
    const { setMsg } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const pwdRef = useRef();
    const pwdReRef = useRef();

    useEffect(() => {
        (!id || !token) &&
            navigate('/error', {
                state: {
                    message: 'Unauthorised user detected.',
                    from: '/login',
                },
            });
        const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9])/;
        setIsStrong(regex.test(password) && password.length > 8);
    }, [password]);

    const handleReset = () => {
        setLoading(true);
        const newPassword = pwdRef.current.value;
        const rePassword = pwdReRef.current.value;
        if (newPassword === rePassword && isStrong)
            api.post('/auth/reset-password', {
                id: id,
                token: token,
                password: newPassword,
                password_confirmation: rePassword,
            })
                .then((response) => {
                    setMsg({
                        status: response.data.state,
                        message: response.data.message,
                    });
                    if (response.status == 200) {
                        setIsRequested(true);
                    }
                    setLoading(false);
                })
                .catch((response) => {
                    console.log(response);
                    setLoading(false);
                });
        else {
            setLoading(false);
            setMsg({
                status: 'Error',
                message: 'Password is not matched',
            });
        }
    };
    if (loading) {
        return <Loading />;
    }

    return (
        <MainFormContainer
            img={backgroundImg}
            heading="Reset Password"
            subheading="Reset your typ-A-thon account Password"
        >
            {isRequested ? (
                <>
                    <p style={{ textAlign: 'left', margin: '0 1em' }}>
                        <span className="highlight">Note: </span>Password must be at least 8 character long and must
                        contains at least one UPPERCASE letter, one Special Character (@,#,$,%,^,&) and one digit (0-9)
                    </p>
                    <Textbox
                        style={{ borderColor: password.length !== 0 ? (isStrong ? '#03c04a' : 'tomato') : 'inherit' }}
                        var={pwdRef}
                        type="Password"
                        legend="New Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div style={{ display: 'flex', width: '90%' }}>
                        {password.length != 0 ? (
                            <>
                                <img
                                    width="25"
                                    height="25"
                                    src={`https://img.icons8.com/color/48/${isStrong ? 'verified-account--v1.png' : 'cancel--v1.png'}`}
                                    alt="x"
                                />
                                <p>&nbsp;{isStrong ? 'Strong' : 'Weak'} password</p>
                            </>
                        ) : (
                            <p>Follow the guideline.</p>
                        )}
                    </div>
                    <Textbox var={pwdReRef} type="Password" legend="Confirm Password" />
                    <Button onClick={handleReset} value="Submit" />
                </>
            ) : (
                <>
                    <h1 className="highlight">Thank You</h1>
                    <p>Password reset is Successfull</p>
                    <Hyperlink type="bordered-theme" href="/login" value="Login" />
                </>
            )}
        </MainFormContainer>
    );
};

export default SetPassword;
