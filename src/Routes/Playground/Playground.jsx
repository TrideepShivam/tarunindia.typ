import { useRef } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import './Playground.css'
import Button from '../../Components/Button/Button';
 
const Playground=()=>{
    const language = ["","English","Hindi"]
    const langRef = useRef()
    const handlePlay=()=>{
        console.log(langRef.current.value)
    }
    return(
    <>
        <p className="sectionHead">PLAYGROUND</p>
        <div className="mainContent">
            <div className="informationContainer">
                <h1 className="highlight">Information</h1>
            </div>
            <div className="playForm">
                <Dropdown var={langRef} options={language} legend="Language"/>
                <Button onClick={handlePlay} value={"Play"}/>
            </div>
        </div>
    </>
    )
}

export default Playground;