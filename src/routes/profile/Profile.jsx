import './Profile.css';
import Textbox from '../../components/textbox/Textbox';

const Profile = () => {
    const allTextField = ['First Name', 'Last Name', 'Instagram', 'Twitter', 'Email'];
    return (
        <div className="bodyBox">
            <p style={{ margin: '0' }} className="sectionHead">
                PROFILE
            </p>
            <div className="containerBox">
                <div className="inputImage">
                    <img height="100px" width="100px" alt="soon" />
                    <div className="textArea">
                        {allTextField.map((a) => (
                            <Textbox legend={a}></Textbox>
                        ))}
                    </div>
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
