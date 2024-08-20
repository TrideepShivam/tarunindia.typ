import { useState } from 'react';
import './Checkbox.css'
 
const Checkbox=({value,transparent=true})=>{
    const [checked,setChecked] = useState(false)
    
    return(
        <div 
            className="checkboxContainer" 
            onClick={()=>setChecked(!checked)}
            style={{background:!transparent&&checked&&'var(--theme-color)',color:!transparent&&checked&&'var(--background-color)'}}
        >
            <div className="circle" style={{
                color:checked?'var(--theme-color)':'var(--background-color)',
                borderColor:!transparent?(checked?'transparent':'var(--text-color-light)'):(checked?'var(--theme-color)':'var(--text-color-light)')
            }}>&#10003;</div>
            <p className="checkboxText" >{value?value:'checkbox'}</p>
        </div>
    )
}

export default Checkbox;