import { createPortal } from 'react-dom';
import MsgBox from './MsgBox';

import './MsgBox.css';

const Notifier = ({ data, removeMsg }) => {
    if (data.length == 0) return <></>;
    return (
        <>
            {createPortal(
                <div className="notificationContainer">
                    {data.map((notification, index) => (
                        <MsgBox key={index} removeMsg={removeMsg} data={notification} />
                    ))}
                </div>,
                document.body,
            )}
        </>
    );
};

export default Notifier;
