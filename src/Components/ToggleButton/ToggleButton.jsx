import { useState } from "react";
import './ToggleButton.css'

const ToggleButton = (props) => {
    const [toggleOn,setToggleOn] = useState(false);

    return(
        <div className="toggleButtonContainer">
            <input id="toggleButtonCheckbox" type="checkbox" onChange={()=>setToggleOn(!toggleOn)}  checked={toggleOn}/>
            <label htmlFor="toggleButtonCheckbox" className="toggleButton"></label>
        </div>
    )
}
export default ToggleButton;