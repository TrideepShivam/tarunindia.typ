import { useContext, useEffect, useRef, useState } from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import './Playground.css'
import Button from '../../components/button/Button';
import ToggleButton from '../../components/toggleButton/ToggleButton';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Context } from '../../ContextAPI';
import Loading from '../../components/loading/Loading';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
 
const Playground=()=>{
    useAuthInterceptor()
    const [loading,setLoading] = useState(true)
    const {setMsg} = useContext(Context)
    const navigate = useNavigate()
    const [dropdownLanguage,setDropdownLanguage] = useState([])//database
    const [dropdownLevel,setDropdownLevel] = useState([])//database
    const [dropdownDuration,setDropdownDuration] = useState(['1 min','5 min','10 min'])
    const [dropdownStory,setDropdownStory] = useState([])
    const langRef = useRef()
    const durationRef = useRef()
    const levelRef = useRef()
    const storyRef = useRef()
    const backspaceRef = useRef(false)
    const highlightRef = useRef(false)
    const conditions=["Backspace Block","Hightlight Text"]
    const handlePlay=()=>{
        if(langRef.current.value&&durationRef.current.value&&levelRef.current.value&&storyRef.current.value)
            navigate('/play',{
                state:{
                    time:durationRef.current.value,
                    backspace:backspaceRef.current,
                    highlight:highlightRef.current,
                    data:{
                        language:langRef.current.value,
                        level:levelRef.current.value,
                        story:storyRef.current.value
                    }
                }
            })
        else
            setMsg({
                isOpen:true,
                status:"Error",
                message:"Please fill every field."
            })  
    }
    useEffect(()=>{
        api.get('/level-language')
        .then(({data})=>{
            setLoading(false)
            setDropdownLanguage([
                ...data.languages
            ])
            setDropdownLevel([
                ...data.levels
            ])
        }).catch(({response})=>{
            console.log(response)
        })
    },[])
    const storyCollection = ()=>{
        if(langRef.current.value&&levelRef.current.value){
            api.post('/stories',{
                language:langRef.current.value,
                level:levelRef.current.value
            })
            .then(({data})=>{
                setDropdownStory([
                    ...data
                ])
                
            }).catch(({response})=>{
                console.log(response)
            })
        }else
            setMsg({
                isOpen:true,
                status:"Error",
                message:"Please choose language and level first."
            }) 
    }
    if(loading){
        return <Loading/>
    }
    return(
    <>
        <p className="sectionHead">PLAYGROUND</p>
        <div className="playgroundContent">
            <div className="informationContainer">
                <h2 className="highlight">Information</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="playForm">
                <h2 className="sectionHead">Play Form</h2>
                <Dropdown var={langRef} options={dropdownLanguage} legend="Language"/>
                <Dropdown var={durationRef} options={dropdownDuration} legend="Duration"/>
                <Dropdown var={levelRef} options={dropdownLevel} legend="Level"/>
                <Dropdown var={storyRef} options={dropdownStory} legend="Story" onClick={storyCollection}/>
                {
                    conditions.map((item,index)=>
                    <div key={index} className="conditionContainer">
                        <p>{item}</p>
                        <ToggleButton var={index===0?backspaceRef:highlightRef}/>
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