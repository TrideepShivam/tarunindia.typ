import './MsgBox.css'

//will definitely get setOpen and data object having status and message
const MsgBox =({setMsg,data})=>{
    const closeMsgBox = ()=>{
        setMsg(false)
    }
    setTimeout(closeMsgBox, 6000)
    const msgThemeColor = data.status=='Failure'?'tomato':'var(--theme-color)';
    return(
        <div className="msgContainer">
            <p style={{color:msgThemeColor}}>{data.status}</p>
            <p>{data.message}</p>
            <div className="counter" style={{background:msgThemeColor}}></div>
        </div>
    )
}

export default MsgBox;