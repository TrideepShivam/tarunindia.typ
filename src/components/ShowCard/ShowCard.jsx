import './ShowCard.css';
const ShowCard=(props)=>
{
    return(
        <>
            <div className="gradentBorder" style={props.style && props.style}>
                <div className="field">
                <span style={{fontSize:40+"px"}}>&#129323;</span>
                    <h2>{props.header}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </>
    );
}
export default ShowCard;