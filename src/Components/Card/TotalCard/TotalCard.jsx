import '../Card.css'
 
const TotalCard=({val,style})=>{
    return(
        <div className="cardContainer" style={style}>
            <p className='sectionHead'>Total Attempts</p>
            <div className="topContainer">
                <p className="cardValue">{val.value}</p>
            </div>
            <p>Today Attempts: <span className='highlight'>{val.todayCount}</span></p>
        </div>
    )
}

export default TotalCard;