import { useState } from 'react';
import './Checkbox.css'
 
const Checkbox=({value,transparent=true})=>{
    const [checked,setChecked] = useState(false)
    
    return(
        <div 
            className="checkboxContainer" 
            onClick={()=>setChecked(!checked)}
            // style={(transparent&&checked)&&{
            //     background:'var(--theme-color)',
            //     color:'var(--background-color)'
            // }}
        >
            <div className="circle" style={{color:checked?'var(--background-color)':'var(--theme-color)'}}>&#10003;</div>
            <p className="checkboxText" >{value?value:'checkbox'}</p>
        </div>
    )
}

export default Checkbox;