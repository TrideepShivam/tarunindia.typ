import './CircleButton.css'
 
function CircleButton(props){
    return(
        <button 
            style={props.style?props.style:{top:"1em",right:"1em"}} 
            className="circleButton" 
            onClick={()=>props.setDetails({
                    ...props.details,
                    open:false
                })}>
            {props.value?props.value:"x"}
        </button>
    )
}

export default CircleButton;