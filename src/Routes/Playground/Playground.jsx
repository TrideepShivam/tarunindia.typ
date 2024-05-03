import { useRef } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import './Playground.css'
import Button from '../../Components/Button/Button';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import { useNavigate } from 'react-router-dom';
import ResultDetail from '../../Components/ResultDetail/ResultDetail';
 
const Playground=()=>{
    const navigate = useNavigate()
    const language = ["","English","Hindi"]
    const duration = ["","1 min","5 min","10 min"]
    const level = ["","Level 1","Level 2","Level 3","Level 4","Level 5"]
    const langRef = useRef()
    const durationRef = useRef()
    const levelRef = useRef()
    const conditions=["Backspace Blocking","Hightlighting Text","Numeric Content","Capitalized Content"]
    const handlePlay=()=>{
        navigate('/play',{
            state:{
                time:.5,
                data:{
                    language:"english",
                    level:1,
                    capitalized:false,
                    numeric:false
                }
            }
        })
    }
    return(
    <>
        <ResultDetail/>
        <p className="sectionHead">PLAYGROUND</p>
        <div className="playgroundContent">
            <div className="informationContainer">
                <h1 className="highlight">Information</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="playForm">
                <h2 className="sectionHead">Play Form</h2>
                <Dropdown var={langRef} options={language} legend="Language"/>
                <Dropdown var={durationRef} options={duration} legend="Duration"/>
                <Dropdown var={levelRef} options={level} legend="Level"/>
                {
                    conditions.map((item,index)=>
                    <div key={index} className="conditionContainer">
                        <p>{item}</p>
                        <ToggleButton/>
                    </div>
                    )
                }
                <Button style={{margin:".8em"}} value={"Play"} onClick={handlePlay}/>
            </div>
        </div>
    </>
    )
}

export default Playground;