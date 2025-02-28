import { useContext } from 'react';
import './Leaderboard.css'
import {Context} from './../../ContextAPI'
const Leaderboard=()=>{
    const {setMsg} = useContext(Context)
    return(
    <>
        <p className="sectionHead">LEADERBOARD</p>
        <div className="leaderboardContent">
            Coming soon
        </div>
    </>
    )
}

export default Leaderboard;