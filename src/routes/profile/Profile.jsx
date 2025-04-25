import './Profile.css';
import Textbox from '../../components/textbox/Textbox';

const Profile = () => {
    const allTextField = ['First Name', 'Last Name', 'Instagram', 'Twitter(x)', 'Facebook', 'Youtube'];
    return (
        <div className="profile">
            <p style={{ margin: '0' }} className="profileHeader">
                PROFILE
            </p>
            <div className="profileContainer">
                <div className="profileImage">
                    <img height="100px" width="100px" alt="soon" />
                    <div className="textArea">
                        {allTextField.map((a) => (
                            <Textbox key={a} legend={a}></Textbox>
                        ))}
                    </div>
                </div>
                <div className="contactInfo">
                    <div className="bio"></div>
                    <div className="contact"></div>
                </div>

                <div className="achivement">
                    <span>ACHIVEMENTS</span>
                    <div className="Achived"></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
