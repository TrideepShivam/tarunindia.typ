import { useEffect } from 'react';
import './Timer.css'
 
const Timer=({second,setSecond,pause=false,timeOut})=>{
    const getTime= ()=>{
        return `${Math.floor(second/60)}:${second%60}`
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
        <div className="timeContainer">
            <div className="time">
                <p className="highlight">TIMER</p>
                <h1>{getTime()}</h1>
            </div>
		</div>
    )
}

export default Timer;