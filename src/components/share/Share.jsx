import { useState, useContext } from 'react';
import html2canvas from 'html2canvas';
import PopUpContainer from '../popUpContainer/PopUpContainer';
import CircleButton from '../circleButton/CircleButton';
import { Context } from '../../ContextAPI';

import './Share.css';

const Share = ({
    className = 'profile',
    shareTitle = 'Share your results',
    shareableUrl = 'https://www.typathon.com/',
    style = { top: '.5em', right: '.5em' },
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setMsg } = useContext(Context);

    const handleDownload = async () => {
        let node = null;
        if (className.startsWith('#') || className.startsWith('.')) {
            node = document.querySelector(className);
        } else if (className) {
            node = document.getElementById(className) || document.querySelector(`.${className}`);
        }
        if (!node) {
            setMsg({
                status: 'Error',
                message: 'Something went wrong! Please try again.',
            });
            return;
        }
        try {
            const canvas = await html2canvas(node);
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'download.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            setMsg({
                status: 'Error',
                message: 'Download failed Please try again.',
            });
        }
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareableUrl);
            setMsg({
                status: 'Success',
                message: 'Link copied to clipboard!',
            });
        } catch (error) {
            setMsg({
                status: 'Error',
                message: 'Failed to copy link. Please try again.',
            });
        }
    };

    const handleFacebookShare = () => {
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}&quote=${encodeURIComponent('Please check this out!')}`;
        window.open(fbUrl, '_blank', 'noopener,noreferrer');
    };

    const handleLinkedInShare = () => {
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareableUrl}`;
        window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    };

    const shareOptions = [
        {
            href: '#',
            value: 'DOWNLOAD',
            onClick: handleDownload,
            icons: ['https://img.icons8.com/ios-filled/30/00aaff/download--v1.png'],
        },
        {
            href: '#',
            value: 'COPY LINK',
            onClick: handleCopyLink,
            icons: ['https://img.icons8.com/ios-filled/30/00aaff/link--v1.png'],
        },
        {
            href: '#',
            value: 'FACEBOOK',
            onClick: handleFacebookShare,
            icons: ['https://img.icons8.com/ios-filled/30/00aaff/facebook-new.png'],
        },
        {
            href: '#',
            value: 'LINKEDIN',
            onClick: handleLinkedInShare,
            icons: ['https://img.icons8.com/ios-filled/30/00aaff/linkedin--v1.png'],
        },
    ];

    return (
        <div className="shareContainer">
            <CircleButton onClick={() => setIsOpen(true)} value={<span>🔗 {shareTitle}</span>} style={style} />
            {isOpen && (
                <PopUpContainer>
                    <div className="popUpContent">
                        <CircleButton onClick={() => setIsOpen(false)} value={<span>✖️</span>} />
                        <div className="shareTitle">{shareTitle}</div>
                        <div className="shareNavigationContainer">
                            {shareOptions.map((option, index) => (
                                <button key={index} className="shareNavigation" onClick={option.onClick} type="button">
                                    <img src={option.icons[0]} alt={option.value} width={30} />
                                    <span>{option.value}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </PopUpContainer>
            )}
        </div>
    );
};

export default Share;
