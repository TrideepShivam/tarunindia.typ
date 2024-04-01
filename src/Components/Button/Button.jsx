import './Button.css'
 
const Button=(props)=>{
    return(
        <button
            className='themeButton'
            onClick={props.onClick&&props.onClick}
        >{props.value}</button>
    )
}

export default Button;