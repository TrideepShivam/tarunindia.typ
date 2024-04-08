import Hyperlink from '../Hyperlink/Hyperlink';
import './Card.css'
 
const Card=({val,style})=>{
    return(
        <div className="cardContainer" style={style}>
            <p className='sectionHead'>{val.cardHead}</p>
            <div className="topContainer">
                <p className="cardValue">{val.value} <span>{val.unit}</span></p>
                <img 
                    width="48" height="48" 
                    src={val.increment?"https://img.icons8.com/fluency-systems-filled/48/00ff85/triangle.png":"https://img.icons8.com/material/48/ff0000/give-way--v1.png"}
                    alt="triangle"
                />
            </div>
            {val.more&&
                <Hyperlink to='/dashboard' value="more details"/>
            }
        </div>
    )
}

export default Card;