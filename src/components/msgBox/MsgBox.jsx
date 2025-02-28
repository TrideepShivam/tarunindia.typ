import './MsgBox.css'

//will definitely get setOpen and data object having status and message
const MsgBox =({removeMsg,data})=>{
    const closeMsgBox = ()=>{
        removeMsg(data.id)
    }
    setTimeout(closeMsgBox, 8000)
    const msgThemeColor = data.status=='Fail'||data.status=='Error'?'tomato':'var(--theme-color)';
    return(
        <div className="msgContainer">
            <p style={{color:msgThemeColor}}>{
                data.status
            }</p>
            <p>{data.message}</p>
            <div className="counter" style={{background:msgThemeColor}}></div>
        </div>
    )
}

export default MsgBox;