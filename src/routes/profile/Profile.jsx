import { useState, useEffect } from 'react';
import Textbox from '../../components/textbox/Textbox';
import Textarea from '../../components/textArea/TextArea';
import Button from '../../components/button/Button';
import Popup from '../../components/popup/Popup';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import ProfileImage from '../../components/profileImage/ProfileImage';
import Loading from '../../components/loading/Loading';
import api from '../../api';
import './Profile.css';

const Profile = () => {
    const allTextField = [
        { label: 'First Name', key: 'firstName' },
        { label: 'Last Name', key: 'lastName' },
        { label: 'Instagram', key: 'instagram' },
        { label: 'Twitter(x)', key: 'twitter' },
        { label: 'Facebook', key: 'facebook' },
        { label: 'Youtube', key: 'youtube' },
    ];
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
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [editableFields, setEditableFields] = useState({});

    useEffect(() => {
        setLoading(true);
        api.post(`/profile`)
            .then(({ data }) => {
                const [firstName, ...lastNameParts] = data?.name?.split(' ') || [];
                setData({
                    ...data,
                    firstName,
                    lastName: lastNameParts.join(' '),
                });
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
                console.log(response);
            });
    }, []);

    const getFieldValue = (key) => {
        if (!data) return '';

        if (editableFields[key] !== undefined) {
            return editableFields[key];
        }
        return data?.[key] || '';
    };

    const handleFieldChange = (key, value) => {
        setEditableFields((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleVerifyClick = (type) => {
        setOtpOpenFor(type);
    };
    const handleOtpSubmit = () => {};

    return (
        <div className="profile">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <p className="profileHeader">PROFILE</p>
                    <div className="profileContainer">
                        <div className="profileImage">
                            <div className="profileImageSection">
                                <ProfileImage />
                                <span className="profileImageText">Public Profile</span>
                            </div>
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
                                {allTextField.map(({ label, key }) => (
                                    <Textbox
                                        key={label}
                                        legend={label}
                                        disabled={isTextAreaEditing}
                                        value={getFieldValue(key)}
                                        onChange={(e) => handleFieldChange(key, e.target.value)}
                                    />
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
                                <Textarea
                                    legend="Bio"
                                    rows={4}
                                    disabled={isBioEditing}
                                    value={editableFields.bio !== undefined ? editableFields.bio : data?.bio || ''}
                                    onChange={(e) => handleFieldChange('bio', e.target.value)}
                                />
                            </div>
                            <div className="contact textArea">
                                <div className="email">
                                    <Textbox legend="Email" value={data?.email} />
                                    <Button
                                        key="emailVerify"
                                        value={'Verify' ?? 'Verified'}
                                        transparancy={true}
                                        onClick={() => handleVerifyClick('email')}
                                    />
                                </div>
                                <div className="phone">
                                    <Textbox legend="Contact No" value={data?.contact} />
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
                </>
            )}
        </div>
    );
};

export default Profile;
