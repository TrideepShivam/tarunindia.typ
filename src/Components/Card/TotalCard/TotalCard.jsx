import '../Card.css'
 
const TotalCard=({val})=>{
    return(
        <div className="cardContainer">
            <p className='sectionHead'>Total Attempts</p>
            <div className="topContainer">
                <p className="cardValue">{val.value}</p>
            </div>
            <p>Today Attempts: <span className='highlight'>{val.todayCount}</span></p>
        </div>
    )
}

export default TotalCard;