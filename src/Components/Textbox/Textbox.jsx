import { useRef } from 'react';
import './Textbox.css'
import { useState } from 'react';
 
const Textbox=(props)=>{
    const [legend,setLegend] = useState(false)
    const blurStyle={
        top:"0em",
        fontSize:"1.5em",
        color:"var(--text-color-light)"
    }
    const focusStyle={
        top:"-1em",
        fontSize:"1em",
        color:"var(--theme-color)"
    }
    let data = props.var?props.var:useRef()
    const focusText = ()=>{

        setLegend(true)
    }
    const blurText = ()=>{
        setLegend(data.current.value?true:false)
    }

    return(
        <div className="textboxContainer">
            <input type={props.type} ref={data} onFocus={focusText} onBlur={blurText}/>
            <p style={legend?focusStyle:blurStyle} >{props.legend}</p>
        </div>
    )
}

export default Textbox;