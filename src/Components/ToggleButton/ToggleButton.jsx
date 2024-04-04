import { useState } from "react";
import './ToggleButton.css'

const ToggleButton = (props) => {
    const [toggleOn,setToggleOn] = useState(true);
    // props.var.current.value=toggleOn
    return(
        <div 
            className="toggleButtonContainer" 
            style={{backgroundColor:!toggleOn?"var(--text-color)":"var(--theme-color)"}}>
            <div 
                style={{left:toggleOn?"1em":"-.8em"}}
                className="toggleButton" 
                onClick={()=>setToggleOn(!toggleOn)}
                ></div>
        </div>
    )
}
export default ToggleButton;