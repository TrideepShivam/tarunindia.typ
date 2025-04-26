import { useState } from 'react';
import Textbox from '../../components/textbox/Textbox';
import Textarea from '../../components/textArea/TextArea';
import Button from '../../components/button/Button';
import Popup from '../../components/popup/Popup';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import './Profile.css';

const Profile = () => {
    const allTextField = ['First Name', 'Last Name', 'Instagram', 'Twitter(x)', 'Facebook', 'Youtube'];
    const typingStats = [
        {
            time: '1 MINUTE',
            kpm: 176,
            wpm: 31,
            accuracy: 94.3,
        },
        {
            time: '5 MINUTE',
            kpm: 177,
            wpm: 32,
            accuracy: 95.3,
        },
        {
            time: '10 MINUTE',
            kpm: 178,
            wpm: 33,
            accuracy: 96.3,
        },
    ];

    const [otpOpenFor, setOtpOpenFor] = useState(null);
    const [isTextAreaEditing, setIsTextAreaEditing] = useState(true);
    const [isBioEditing, setIsBioEditing] = useState(true);
    const handleVerifyClick = (type) => {
        setOtpOpenFor(type);
    };
    const handleOtpSubmit = () => {};
    return (
        <div className="profile">
            <p className="profileHeader">PROFILE</p>
            <div className="profileContainer">
                <div className="profileImage">
                    <img height="100px" width="100px" alt="soon" />
                    <div className="textArea">
                        <div className="textAreaSavaEdit">
                            <Button
                                key="save"
                                value="Save"
                                transparancy={true}
                                onClick={() => {
                                    setIsTextAreaEditing(true);
                                }}
                            />
                            <Button
                                key="edit"
                                value="Edit"
                                transparancy={true}
                                onClick={() => {
                                    setIsTextAreaEditing(false);
                                }}
                            />
                        </div>
                        {allTextField.map((val) => (
                            <Textbox key={val} legend={val} disabled={isTextAreaEditing} />
                        ))}
                    </div>
                </div>
                <div className="contactInfo">
                    <div className="bio">
                        <div className="bioSaveEdit">
                            <Button
                                key="save"
                                value="Save"
                                transparancy={true}
                                onClick={() => {
                                    setIsBioEditing(true);
                                }}
                            />
                            <Button
                                key="edit"
                                value="Edit"
                                transparancy={true}
                                onClick={() => {
                                    setIsBioEditing(false);
                                }}
                            />
                        </div>
                        <Textarea legend="Bio" rows={4} disabled={isBioEditing} />
                    </div>
                    <div className="contact textArea">
                        <div className="email">
                            <Textbox legend="Email" />
                            <Button
                                key="emailVerify"
                                value={'Verify' ?? 'Verified'}
                                transparancy={true}
                                onClick={() => handleVerifyClick('email')}
                            />
                        </div>
                        <div className="phone">
                            <Textbox legend="Contact No" />
                            <Button
                                key="phoneVerify"
                                value={'Verify' ?? 'Verified'}
                                transparancy={true}
                                onClick={() => handleVerifyClick('contact')}
                            />
                        </div>
                        <Popup
                            isOpen={!!otpOpenFor}
                            onClose={() => setOtpOpenFor(null)}
                            onSubmit={handleOtpSubmit}
                            header={`Enter OTP for ${otpOpenFor}`}
                            showInput={true}
                            inputPlaceholder="Please Enter Your OTP"
                            description={
                                <>
                                    We have sent an OTP to your {otpOpenFor}.<br />
                                    Please enter it below to verify {otpOpenFor}.
                                </>
                            }
                        />
                    </div>
                </div>
                <div className="typingDetails">
                    <h3>TYPING DETAILS</h3>
                    <div className="typingModes">
                        <Hyperlink key="english" type="bordered-theme" value="English" onClick={() => {}} />
                        <Hyperlink key="krutidev" type="bordered-theme" value="Krutidev" onClick={() => {}} />
                        <Hyperlink key="mangal" type="bordered-theme" value="Mangal" onClick={() => {}} />
                    </div>
                    <div className="typingStats">
                        <div className="statsHeader">
                            <div className="statLabel"></div>
                            <div className="statLabel">KPM (AVG)</div>
                            <div className="statLabel">WPM (AVG)</div>
                            <div className="statLabel">ACCURACY</div>
                        </div>
                        {typingStats.map((stat, index) => (
                            <div className="statsRow" key={index}>
                                <div className="statValue">{stat.time}</div>
                                <div className="statValue">{stat.kpm}</div>
                                <div className="statValue">{stat.wpm}</div>
                                <div className="statValue">{stat.accuracy}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="achivement">
                    <span>ACHIEVEMENTS</span>
                    <div className="achivementDetails">No Data Found</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
