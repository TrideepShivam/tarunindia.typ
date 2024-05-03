import './Percentage.css'
 
const Percentage=(props)=>{

    const percentageStyle = "conic-gradient(var(--theme-color) "+(props.value*3.6)+"deg, var(--background-color) 0deg)";
    
    return(
        <div className="outer" style={{backgroundImage:percentageStyle}}>
            <div className="inner">
                <p className="highlight">{props.text}</p>
                {props.value}%
            </div>
        </div>
    )
}

export default Percentage;