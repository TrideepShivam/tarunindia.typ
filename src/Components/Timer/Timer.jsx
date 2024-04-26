import { useEffect, useState } from 'react';
import './Timer.css'
 
const Timer=({time=2,pause=false})=>{
    const [second,setSecond] = useState((time?time:1)*60)
    const getTime= ()=>{
        return `${Math.floor(second/60)}:${second%60}`
    }

    useEffect(()=>{
        let interval
        if(second>0&&!pause)
            interval = setInterval(()=>{
                setSecond((s)=>s-1)
            },1000)
        return ()=>clearInterval(interval)
    },[second])

    return(
        <div className="timeContainer">
			<p className="highlight">TIMER</p>
			<h1>{getTime()}</h1>
		</div>
    )
}

export default Timer;