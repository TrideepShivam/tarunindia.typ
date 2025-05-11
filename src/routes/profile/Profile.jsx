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
import TypingDetails from '../../routes/profile/typingDetails/TypingDetails';
import { handleNotification } from '../../utils/notificationUtils';

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

    useAuthInterceptor();
    const { setMsg, setUserLocal, userDetails } = useContext(Context);
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
        const updatedBio = editableFields.bio !== undefined ? editableFields.bio : data?.bio || '';

        setLoading(true);
        setIsBioEditing(true);
        api.post('/update-bio', { bio: updatedBio })
            .then((bio) => {
                handleNotification(bio.data, setMsg);
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
            details[key] = editableFields[key] !== undefined ? editableFields[key] : data?.[key] || '';
            return details;
        }, {});

        personalDetails.name = `${personalDetails.firstName} ${personalDetails.lastName}`.trim();

        setLoading(true);
        api.post('/update-personal-details', personalDetails)
            .then((personalData) => {
                handleNotification(personalData.data, setMsg);
                setIsTextAreaEditing(true);
                setLoading(false);
                setUserLocal({
                    ...userDetails,
                    user: {
                        ...userDetails.user,
                        name: personalDetails.name,
                    },
                });
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
                            <Hyperlink
                                href={`/profile/${data.id}`}
                                target={'_blank'}
                                value="Public profile"
                                style={{ marginLeft: '2em' }}
                            />
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
                    <TypingDetails data={data?.avg_test_details} />
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
