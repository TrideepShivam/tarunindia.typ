import React, { useCallback, useContext, useState } from 'react';
import Cropper from 'react-easy-crop';
import PopUpContainer from '../popUpContainer/PopUpContainer';
import Hyperlink from '../hyperlink/Hyperlink';
import './ProfileImage.css';
import api from '../../api';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import Loading from '../loading/Loading';
import { Context } from '../../ContextAPI';
import Logo from '../../assets/logo-reverse.svg';
const ProfileImage = ({ url = Logo }) => {
    useAuthInterceptor();
    const { setMsg, userDetails, setUserLocal } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState(url);
    const [cropPixels, setCropPixels] = useState(null);
    //get the file from user and store it to the imagesrc
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate that the file is an image type
            if (!file.type.startsWith('image/')) {
                setMsg({
                    status: 'Error',
                    message: 'Please select a valid image.',
                });
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => setImageSrc(reader.result);
        }
    };

    const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCropPixels(croppedAreaPixels);
    }, []);

    const saveCroppedImage = async () => {
        if (imageSrc && cropPixels) {
            const croppedImageUrl = await getCroppedImg(imageSrc, cropPixels);
            setCroppedImage(croppedImageUrl);
            setImageSrc(null);
            const formData = new FormData();
            formData.append('profile_image', dataURLtoFile(croppedImageUrl, 'new.jpg'));
            setLoading(true);
            //sending image to backend
            api.post('/update-profile-pic', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
                .then((response) => {
                    setMsg({
                        status: response.data.state,
                        message: response.data.message,
                    });
                    setUserLocal({
                        ...userDetails,
                        profile_pic_url: response.data.profile_pic_url,
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    setCroppedImage(url);
                });
        }
    };

    function getCroppedImg(imageSrc, cropPixels) {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = cropPixels.width;
                canvas.height = cropPixels.height;

                ctx.drawImage(
                    image,
                    cropPixels.x,
                    cropPixels.y,
                    cropPixels.width,
                    cropPixels.height,
                    0,
                    0,
                    cropPixels.width,
                    cropPixels.height,
                );

                resolve(canvas.toDataURL('image/jpeg')); // Convert canvas to image URL
            };
        });
    }

    function dataURLtoFile(dataUrl, fileName) {
        let arr = dataUrl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        for (let i = 0; i < n; i++) {
            u8arr[i] = bstr.charCodeAt(i);
        }
        return new File([u8arr], fileName, { type: mime });
    }
    return (
        <>
            <div
                className="profileImageContainer"
                onMouseEnter={() => setEdit(true)}
                onMouseLeave={() => setEdit(false)}
            >
                {loading ? <Loading type="circle" /> : <img width={'100%'} src={croppedImage} alt="Profile" />}
                {edit && (
                    <label className="profileEditBtn" htmlFor="fileUpload">
                        Edit
                        <input
                            type="file"
                            accept="image/*"
                            id="fileUpload"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </label>
                )}
            </div>
            {imageSrc && (
                <PopUpContainer>
                    <h2>Zoom and Crop you image</h2>
                    <div className="cropperContainer">
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={handleCropComplete}
                        />
                    </div>
                    <Hyperlink type="themed" onClick={saveCroppedImage} value="Set Profile Picture" />
                    <Hyperlink type="trans-hover" onClick={() => setImageSrc(null)} value="Cancel" />
                </PopUpContainer>
            )}
        </>
    );
};

export default ProfileImage;
