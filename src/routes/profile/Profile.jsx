import { useEffect, useState, useContext } from 'react';
import api from '../../api';
import { Context } from '../../ContextAPI';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import Button from '../../components/button/Button';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Loading from '../../components/loading/Loading';
import Popup from '../../components/popup/Popup';
import ProfileImage from '../../components/profileImage/ProfileImage';
import Textarea from '../../components/textArea/TextArea';
import Textbox from '../../components/textbox/Textbox';

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
    useAuthInterceptor();
    const { setMsg } = useContext(Context);
    const [otpOpenFor, setOtpOpenFor] = useState(null);
    const [isTextAreaEditing, setIsTextAreaEditing] = useState(true);
    const [isBioEditing, setIsBioEditing] = useState(true);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editableFields, setEditableFields] = useState({});

    useEffect(() => {
        api.get('/profile')
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
    }, [loading]);

    const handleBioSave = () => {
        setLoading(true);
        setIsBioEditing(true);
        api.post('/update-bio', { bio: editableFields.bio || data?.bio })
            .then((bio) => {
                setMsg({
                    status: bio.data.state,
                    message: bio.data.message,
                });
                setIsBioEditing(true);
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
                console.log(response);
            });
    };

    const handlePersonalDetailsSave = () => {
        const personalDetails = allTextField.reduce((details, { key }) => {
            details[key] = editableFields[key] || data?.[key] || '';
            return details;
        }, {});

        personalDetails.name = `${personalDetails.firstName} ${personalDetails.lastName}`.trim();
        setLoading(true);
        api.post('/update-personal-details', personalDetails)
            .then((personalData) => {
                const error = personalData.data.message;

                if (typeof error === 'string') {
                    setMsg({
                        message: error,
                    });
                } else if (typeof error === 'object' && error !== null) {
                    Object.entries(error).forEach(([title, messages]) => {
                        setMsg({
                            status: personalData.data.state,
                            message: `${title}: ${messages}`,
                        });
                    });
                }

                setIsTextAreaEditing(true);
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
                console.log(response);
            });
    };

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

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <p className="sectionHead">PROFILE</p>
            <div className="profile">
                <div className="profileContainer">
                    <div className="profileImage">
                        <div className="profileImageSection">
                            <ProfileImage url={data.profile_pic_url && data.profile_pic_url} />
                            <Hyperlink value="Public profile" style={{ marginLeft: '2em' }} />
                        </div>
                        <div className="textArea">
                            <div className="textAreaSavaEdit">
                                <Button
                                    key="toggleEdit"
                                    value={isTextAreaEditing ? 'Edit' : 'Save'}
                                    transparancy={true}
                                    onClick={() => {
                                        if (isTextAreaEditing) {
                                            setIsTextAreaEditing(false);
                                        } else {
                                            setIsTextAreaEditing(true);
                                            handlePersonalDetailsSave();
                                        }
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
                                    key="toggleBioEdit"
                                    value={isBioEditing ? 'Edit' : 'Save'}
                                    transparancy={true}
                                    onClick={() => {
                                        if (isBioEditing) {
                                            setIsBioEditing(false);
                                        } else {
                                            setIsBioEditing(true);
                                            handleBioSave();
                                        }
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
            </div>
        </>
    );
};

export default Profile;
