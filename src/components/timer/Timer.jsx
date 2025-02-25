import { useEffect, useState } from 'react';
import './Timer.css'
 
const Timer=({time,second,setSecond,pause=false,timeOut,checkpoint})=>{
    const [percentage,setPercentage] = useState(100)
    const getTime= ()=>{
        let min = Math.floor(second/60)
        let sec = second%60
        min<10&&(min='0'+min)
        sec<10&&(sec='0'+sec)
        return `${min}:${sec}`
    }

    useEffect(()=>{
        setPercentage((second/(parseInt(time)*60))*100)
        if(!pause){
            if(((time*60-second)+1)%60==0)//+1 because we are checkpointing on 59,119,...
                second>1&&checkpoint(time-(second-1)/60)//-1 because second is decreasing
            let interval
            if(second>0){
                interval = setInterval(()=>{
                    setSecond((s)=>s-1)
                },1000)
            }else{
                timeOut()
            }
            return ()=>clearInterval(interval)
        }
    },[second,pause])
    return(
        <div 
            className="timeContainer"
            style={{backgroundImage:'conic-gradient(var(--theme-color) '+percentage+'%,var(--background-color) 1%,black '+(100-percentage)+'%)'}}
        >
            <div className="time">
                <p className="highlight">TIMER</p>
                <h1>{getTime()}</h1>
            </div>
		</div>
    )
}

export default Timer;