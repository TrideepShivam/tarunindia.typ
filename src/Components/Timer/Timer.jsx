import { useEffect } from 'react';
import './Timer.css'
 
const Timer=({percentage,second,setSecond,pause=false,timeOut})=>{
    const getTime= ()=>{
        let min = Math.floor(second/60)
        let sec = second%60
        min<10&&(min='0'+min)
        sec<10&&(sec='0'+sec)
        return `${min}:${sec}`
    }

    useEffect(()=>{
        if(!pause){
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