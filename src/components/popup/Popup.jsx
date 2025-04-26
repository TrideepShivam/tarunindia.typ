import { useState } from 'react';
import Textbox from '../textbox/Textbox';
import Hyperlink from '../hyperlink/Hyperlink';
import './Popup.css';

const Popup = ({
    isOpen,
    onClose,
    onSubmit,
    header,
    description,
    showInput,
    inputType = 'text',
    submitText = 'Submit',
    cancelText = 'Cancel',
}) => {
    const [inputValue, setInputValue] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        onSubmit(showInput ? inputValue : null);
        onClose();
        setInputValue('');
    };

    const handleCancel = () => {
        setInputValue('');
        onClose();
    };

    return (
        <div className="popupOverlay" onClick={onClose}>
            <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                {header && <h2>{header}</h2>}
                <br />
                {description && <p>{description}</p>}

                {showInput && (
                    <Textbox
                        type={inputType}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    ></Textbox>
                )}

                <div className="submitButtons">
                    <Hyperlink type="bordered-theme" value={submitText} onClick={handleSubmit} />
                    <Hyperlink type="trans-hover" value={cancelText} onClick={handleCancel} />
                </div>
            </div>
        </div>
    );
};

export default Popup;
