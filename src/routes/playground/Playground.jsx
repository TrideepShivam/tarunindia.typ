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
import Retry from '../../components/retry/Retry';
import PendingTests from './pendingTests/PendingTests';
 
const Playground=()=>{
    useAuthInterceptor()
    const [loading,setLoading] = useState(true)
    const [retry,setRetry] = useState(false)
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
    const conditions=["Backspace","Hightlight Text"]
    const handlePlay=()=>{
        setLoading(true)
        if(langRef.current.value&&durationRef.current.value&&levelRef.current.value&&storyRef.current.value){
            
            api.post('/initiate-test',{
                story_id:dropdownStory.find(story => story.title === storyRef.current.value).id,
                duration:parseInt(durationRef.current.value),
                backspace:backspaceRef.current,
                highlight:highlightRef.current
            })
            .then(({data})=>{
                const url = '/play/'+data
                navigate(url)
                
            }).catch(({response})=>{
                setMsg({
                    isOpen:true,
                    status:response.data.state,
                    message:response.data.message
                })
            })
        }else
            setMsg({
                isOpen:true,
                status:"Error",
                message:"Please fill every field."
            })
            setLoading(false)
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
            setLoading(false)
            setRetry(true)
        })
    },[retry])
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
    }else if(retry){
        return <Retry retry={()=>setRetry(false)}/>
    }

    return(
    <>
        <p className="sectionHead">PLAYGROUND</p>
        <div className="playgroundContent">
            <div className="playgroundInfoAndPendingContainer">
                <div className="playgroundInformation">
                    <h3>Welcome to <span className="highlight">Typathon!</span> App</h3>
                    <p>This form is designed to help you customize your typing test experience. By filling out the form, you can select the language you want to practice, choose the duration of the test, and pick your skill level. Whether you’re a beginner looking to improve your typing speed, an intermediate user aiming to enhance your accuracy, or someone who enjoys typing out stories, this form will tailor the test to your needs.</p>
                </div>
                <div className="pendingTestContainer">
                    <h2 className="sectionHead">Pending Tests</h2>
                    <PendingTests/>
                </div>
            </div>
            <div className="playForm">
                <h2 className="sectionHead">Play Form</h2>
                <p><span className="highlight">Welcome!</span> Ready to take your typing skills to the next level? Let's get those fingers flying!</p>
                <Dropdown var={langRef} options={dropdownLanguage} legend="Language"/>
                <Dropdown var={durationRef} options={dropdownDuration} legend="Duration"/>
                <Dropdown var={levelRef} options={dropdownLevel} legend="Level"/>
                <Dropdown var={storyRef} options={dropdownStory.map(obj=>obj.title)} legend="Story" onClick={storyCollection}/>
                {conditions.map((item,index)=>
                    <div key={index} className="conditionContainer">
                        <p>{item}</p>
                        <ToggleButton var={index===0?backspaceRef:highlightRef}/>
                    </div>
                )}
                <Button style={{margin:".8em"}} value={"Play"} onClick={handlePlay}/>
            </div>
        </div>
    </>
    )
}

export default Playground;