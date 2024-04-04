import { useRef } from 'react';
import './Dropdown.css'
import { useState } from 'react';
 
const Dropdown=(props)=>{
    const [legend,setLegend] = useState(false)
    const blurStyle={
        top:".3em",
        left:".6em",
        fontSize:"1.5em",
        color:"var(--text-color-light)",
        backgroundColor:"transparent"
    }
    const focusStyle={
        top:"-.8em",
        left:".6em",
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
        <div className="dropdownContainer">
            <select ref={data} onFocus={focusText} onBlur={blurText}>
                {props.options.map((item,index)=>
                    <option key={index}>{item}</option>
                )}
            </select>
            <p style={legend?focusStyle:blurStyle}>{props.legend}</p>
        </div>
    )
}

export default Dropdown;