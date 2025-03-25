import { createPortal } from 'react-dom';
import './PopUpContainer.css';

const PopUpContainer = ({ children }) => {
    return createPortal(<div className="popUpContainer">{children}</div>, document.body);
};

export default PopUpContainer;
