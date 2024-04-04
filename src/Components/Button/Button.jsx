import './Button.css'
 
const Button=(props)=>{
    return(
        <button
            style={props.style&&props.style}
            type='submit'
            className='themeButton'
            onClick={props.onClick&&props.onClick}
        >{props.value}</button>
    )
}

export default Button;