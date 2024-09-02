import "./DotLineBox.css"
import { Context } from "../../ContextAPI";
import { useContext } from "react";
const DotLineBox = (props) => {
    const {lightMode,setLightMode}=useContext(Context);
    let currentImg=!lightMode?props.image.light:props.image.dark;
    return (
        <div className="dotBox" style={props.dot=="left"?{borderLeftWidth:2+"px"}:{borderRightWidth:2+"px",flexDirection:"row-reverse"}}>
            <div className="workExplain">
                <h2>{props.head}</h2>
                <p style={props.dot=="right"?{textAlign:"end"}:{}}>{props.short} </p>
            </div>
            <img src={currentImg}/>
        </div>
    )
}
export default DotLineBox;