import { useEffect, useState } from 'react';
import './FullScreenBtn.css';

const FullScreenBtn = () => {
    const [showTooltip, setShowtooltip] = useState(false);
    const [fullScreen, setFullScreen] = useState(true);

    useEffect(() => {
        fullScreen ? document.documentElement.requestFullscreen() : exitFullscreen();
    }, [fullScreen]);
    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
    };
    return (
        <div
            className="fullScreenContainer"
            onMouseOver={() => setShowtooltip(true)}
            onMouseLeave={() => setShowtooltip(false)}
        >
            <img
                onClick={() => setFullScreen(!fullScreen)}
                width="28"
                height="28"
                src="https://img.icons8.com/neon/96/full-screen.png"
                alt="full-screen"
            />
            {showTooltip && <p className="fullScreenTooltip">{fullScreen ? 'Exit Full Screen' : 'Full Screen'}</p>}
        </div>
    );
};
export default FullScreenBtn;
