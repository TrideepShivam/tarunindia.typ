import './CardContainer.css'
 
const CardContainer=({children,style})=>{
    return(
        <div className="cardMainContainer" style={style&&style}>
            {children}
        </div>
    )
}

export default CardContainer;