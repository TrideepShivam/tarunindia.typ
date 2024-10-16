import './Percentage.css'
import yay from './../../../assets/yay.gif'

const Percentage=(props)=>{
    const percentageColor = props.value<95?'tomato':'var(--theme-color)'
    const percentageStyle = "conic-gradient("+percentageColor+" "+(props.value*3.6)+"deg, var(--background-color) 0deg)";
    
    return(
        <div className='percentageContainer'>
            {(props.value>=95)&&<img width='250em' className='congratulation' src={yay} alt="" />}
            <div className="outer" style={{backgroundImage:percentageStyle}}>
                <div className="inner">
                    <p className="highlight">{props.text}</p>
                    {props.value}%
                </div>
            </div>
        </div>
    )
}

export default Percentage;