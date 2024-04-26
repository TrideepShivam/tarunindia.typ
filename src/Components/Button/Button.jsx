import './Button.css'
 
const Button=(props)=>{
    const btnClass = props.transparancy?'themeButton transparent':'themeButton'
    return(
        <button
            style={props.style&&props.style}
            type='submit'
            className={btnClass}
            onClick={props.onClick&&props.onClick}
        >{props.value}</button>
    )
}

export default Button;