import './CardContainer.css'
 
const CardContainer=({children})=>{
    return(
        <div className="cardMainContainer">
            {children}
        </div>
    )
}

export default CardContainer;