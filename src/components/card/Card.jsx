import Hyperlink from '../hyperlink/Hyperlink';
import './Card.css';

const Card = ({ val, style }) => {
    return (
        <div className="cardContainer" style={style}>
            <p className="sectionHead">{val.cardHead}</p>
            <div className="topContainer">
                <p className="cardValue">{val.value}</p>
                <p className="cardUnit">{val.unit}</p>
            </div>
            {val.more && <Hyperlink to="/dashboard" value="more details" />}
        </div>
    );
};

export default Card;
