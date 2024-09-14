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
import Hyperlink from '../../components/hyperlink/Hyperlink';
 
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
    const conditions=["Backspace","Hightlight Text"]
    const handlePlay=()=>{
        if(langRef.current.value&&durationRef.current.value&&levelRef.current.value&&storyRef.current.value)
            navigate('/play',{
                state:{
                    from:'/playground',
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
                <h2 className="highlight">Instructions</h2>
                <h3>Welcome to <span className="highlight">Tarun India Typing</span> App</h3>
                <p>This form is designed to help you customize your typing test experience. By filling out the form, you can select the language you want to practice, choose the duration of the test, and pick your skill level. Whether you’re a beginner looking to improve your typing speed, an intermediate user aiming to enhance your accuracy, or someone who enjoys typing out stories, this form will tailor the test to your needs.</p>
                <ol>
                    <li>Choose <span className="highlight">language</span> among English, Hindi(Krutidev/Mangal).</li>
                    <li>Set the <span className="highlight">duration</span> from 1, 5, 10 mins.</li>
                    <li>Set the <span className="highlight">level</span> according to your practice level.</li>
                    <li>Choose the <span className="highlight">Story</span> after selecting the language and the level.</li>
                    <li>Unblock the <span className="highlight">Backspace</span> if you want to use the backspace.</li>
                    <li>Unblock the <span className="highlight">Hilighting text</span> if you don't want to Highlight the text.</li>
                </ol>
                <h3>Now, Click to the <span className="highlight">Play</span> button and start your typing speed improvement journey!</h3>
                <p><span className="highlight">Note:-</span> To change the keyboard layout for Hindi <span className="highlight">Mangal</span> font, please press <span className="highlight">ALT+SHIFT</span> from keyboard. For this you must have installed <span className="highlight">Indic Input 3</span> Software. You can download it from <Hyperlink onClick={()=>
                    window.location.href="https://www.microsoft.com/en-in/bhashaindia/downloads?msockid=15f4967d9a2f6ebc02f784929b296f8e"
                }value='here'/>. If you feel any difficulty please contact us on <span className="highlight">Support</span> Channel</p>
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