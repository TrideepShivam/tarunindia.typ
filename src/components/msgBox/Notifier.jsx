import './MsgBox.css'
import { createPortal } from "react-dom";
import MsgBox from './MsgBox'
const Notifier=({data,removeMsg})=>{
    console.log(data)
    if(data.length==0)
        return(<></>)
    return(<>
        {createPortal(<div className="notificationContainer">
            {data.map((notification,index)=><MsgBox key={index} removeMsg={removeMsg} data={notification}/>)}
        </div>,document.body)}
        </>
    )
}

export default Notifier;