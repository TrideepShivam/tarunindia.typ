import '../Card.css';

const TotalCard = ({ val, style }) => {
    return (
        <div className="cardContainer" style={style && style}>
            <p className="sectionHead">{val.cardHead ? val.cardHead : 'Card Head'}</p>
            <div className="topContainer">
                <p className="cardValue">{val.value}</p>
            </div>
            <p>
                {val.queryQsn} <span className="highlight">{val.todayCount}</span>
            </p>
        </div>
    );
};

export default TotalCard;
