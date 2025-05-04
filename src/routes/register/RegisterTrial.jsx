import Hyperlink from '../../components/hyperlink/Hyperlink';
import InformationContainer from '../../components/informationContainer/InformationContainer';
import Hi from './../../assets/hi.png';
import NameId from './../../assets/nameId.png';
import Pwd from './../../assets/pwdGiven.png';
import Tnc from './../../assets/tncTrial.png';

import './Register.css';

const RegisterTrial = () => {
    return (
        <div className="registerContainer">
            <InformationContainer>
                <h2 className="sectionHead">REGISTRATION</h2>
                <h3 className="highlight">Get FREE Registration</h3>
                <p>Free registration is only for the student who are currently studying in Tarun India Institute</p>
                <p>Please contact us for further query.</p>
                <h2>STEP 01:</h2>
                <p>
                    Subscribe{' '}
                    <Hyperlink
                        onClick={() =>
                            (window.location.href = 'https://www.youtube.com/channel/UChbMJR4lwYEqA9sIa6bI7fg/')
                        }
                        value="Youtube"
                    />{' '}
                    and{' '}
                    <Hyperlink
                        onClick={() => (window.location.href = 'https://whatsapp.com/channel/0029VaiLTTTLtOjHBKi3ox3s')}
                        value="Whatsapp"
                    />{' '}
                    channel to get notified for related news and contents.
                </p>
                <h2>STEP 02:</h2>
                <p>
                    Say, <span className="highlight">Hi</span> to our official whatsapp number{' '}
                    <span className="highlight">9709483986</span>
                </p>
                <img width="50%" src={Hi} alt="hi" />

                <h2>STEP 03:</h2>
                <p>
                    Agree our <span className="highlight">Terms and Condition</span>.
                </p>
                <img width="50%" src={Tnc} alt="" />

                <h2>STEP 04:</h2>
                <p>
                    Share your <span className="highlight">Full Name</span> and{' '}
                    <span className="highlight">Email Id</span>.
                </p>
                <img width="50%" src={NameId} alt="" />

                <h2>STEP 05:</h2>
                <p>
                    Get Your <span className="highlight">Password</span> and Enjoy your{' '}
                    <span className="highlight">Typing Journey!</span>
                </p>
                <img width="50%" src={Pwd} alt="" />
                <h3 className="highlight">Now, Start you typing journey!</h3>
            </InformationContainer>
        </div>
    );
};

export default RegisterTrial;
