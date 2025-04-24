import { useContext, useState } from 'react';
import './Profile.css';
import Textbox from '../../components/textbox/Textbox';
import { Context } from '../../ContextAPI';

const Profile = () => {
    const { userDetails } = useContext(Context);
    const [typingMode, setTypingMode] = useState('English');
    const [profileImage, setProfileImage] = useState(null);
    const [bio, setBio] = useState('');
    const [isEditingBio, setIsEditingBio] = useState(true);

    const handleModeChange = (mode) => {
        setTypingMode(mode);
    };

    const handleImageChange = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setProfileImage(event.target.result);
                };
                reader.readAsDataURL(file);
            }
        };

        fileInput.click();
    };

    const handleImageRemove = () => {
        setProfileImage(null);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleSaveBio = () => {
        setIsEditingBio(false);
        console.log('Bio saved:', bio);
    };

    const handleEditBio = () => {
        setIsEditingBio(true);
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>PROFILE</h2>
                <div className="profile-actions">
                    <button className="save-btn">Save</button>
                    <button className="edit-btn">Edit</button>
                </div>
            </div>

            <div className="profile-content">
                <div className="profile-left">
                    <div className="profile-image-container">
                        <div
                            className="profile-image"
                            style={
                                profileImage
                                    ? {
                                          backgroundImage: `url(${profileImage})`,
                                          backgroundSize: 'cover',
                                          backgroundPosition: 'center',
                                      }
                                    : {}
                            }
                        ></div>
                        <div className="profile-image-actions">
                            <button className="change-btn" onClick={handleImageChange}>
                                Change
                            </button>
                            <button className="remove-btn" onClick={handleImageRemove}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <button className="public-profile-btn">Public Profile</button>
                </div>

                <div className="profile-right">
                    <div className="profile-form">
                        <div className="form-row">
                            <div className="form-group">
                                <Textbox legend="First Name" />
                            </div>
                            <div className="form-group">
                                <Textbox legend="Last Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <Textbox legend="Instagram" />
                            </div>
                            <div className="form-group">
                                <Textbox legend="Twitter(x)" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <Textbox legend="Facebook" />
                            </div>
                            <div className="form-group">
                                <Textbox legend="Youtube" />
                            </div>
                        </div>
                        <div className="form-row bio-email-row">
                            <div className="form-group bio-group">
                                <div className="bio-label">
                                    <p>Bio</p>
                                </div>
                                {isEditingBio ? (
                                    <textarea
                                        className="bio-input"
                                        placeholder="Enter your bio..."
                                        value={bio}
                                        onChange={handleBioChange}
                                    ></textarea>
                                ) : (
                                    <div className="bio-display">{bio || 'No bio provided'}</div>
                                )}
                                <div className="bio-actions">
                                    <button className="save-btn" onClick={handleSaveBio}>
                                        Save
                                    </button>
                                    <button className="edit-btn" onClick={handleEditBio}>
                                        Edit
                                    </button>
                                </div>
                            </div>

                            <div className="form-group email-contact-group">
                                <div className="email-wrapper">
                                    <Textbox legend="Email" />
                                    <button className="verify-btn">Verify</button>
                                </div>
                                <div className="contact-wrapper">
                                    <Textbox legend="Contact No" />
                                    <button className="verify-btn">Verify</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="typing-details">
                        <h3>TYPING DETAILS</h3>
                        <div className="typing-modes">
                            <button
                                className={`mode-btn ${typingMode === 'English' ? 'active' : ''}`}
                                onClick={() => handleModeChange('English')}
                            >
                                English
                            </button>
                            <button
                                className={`mode-btn ${typingMode === 'Krutidev' ? 'active' : ''}`}
                                onClick={() => handleModeChange('Krutidev')}
                            >
                                Krutidev
                            </button>
                            <button
                                className={`mode-btn ${typingMode === 'Mangal' ? 'active' : ''}`}
                                onClick={() => handleModeChange('Mangal')}
                            >
                                Mangal
                            </button>
                        </div>

                        <div className="typing-stats">
                            <div className="stats-header">
                                <div className="stat-label">KPM (AVG)</div>
                                <div className="stat-label">WPM (AVG)</div>
                                <div className="stat-label">ACCURACY</div>
                            </div>
                            <div className="stats-row">
                                <div className="time-label">1 MINUTE</div>
                                <div className="stat-value">176</div>
                                <div className="stat-value">31</div>
                                <div className="stat-value">94.3</div>
                            </div>
                            <div className="stats-row">
                                <div className="time-label">5 MINUTE</div>
                                <div className="stat-value">176</div>
                                <div className="stat-value">31</div>
                                <div className="stat-value">94.3</div>
                            </div>
                            <div className="stats-row">
                                <div className="time-label">10 MINUTE</div>
                                <div className="stat-value">176</div>
                                <div className="stat-value">31</div>
                                <div className="stat-value">94.3</div>
                            </div>
                        </div>
                    </div>

                    <div className="achievements-section">
                        <h3>ACHIEVEMENTS</h3>
                        <div className="achievements-content">
                            <p>No Data Found</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
