import { useContext } from 'react';
import { Context } from '../../ContextAPI';

import './Tags.css';

const Tags = ({ value, onClick }) => {
    const { lightMode } = useContext(Context);

    return (
        <div className="tagsContainer">
            <p className="tag">{value}</p>
            <img
                width="15"
                height="15"
                src={
                    !lightMode
                        ? 'https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png'
                        : 'https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png'
                }
                alt="back"
                onClick={() => onClick && onClick()}
            />
        </div>
    );
};

export default Tags;
