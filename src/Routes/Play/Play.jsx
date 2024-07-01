import { useContext, useEffect, useRef, useState } from 'react';
import './Play.css'
import logo from '../../assets/logo-reverse.svg'
import { Context } from '../../ContextAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api';
import Timer from '../../Components/Timer/Timer';
import ToggleDarkLight from '../../Components/ToggleDarkLight/ToggleDarkLight';
import WordCount from '../../Components/WordCount/WordCount';
import Button from '../../Components/Button/Button';
import TextContent from '../../Components/TextContent/TextContent';
 
const Play=()=>{
    const [pauseTimer,setPauseTimer] = useState(true)
    const writtenStory = useRef("")
    const {userDetails,setMsg} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [story,setStory] = useState(['Text']);
    const [wordCount,setWordCount] = useState(0);
    const [typingDisabled,setTypingDisabled]=useState(false)
    const [second,setSecond] = useState(parseInt(location.state.time)*60)
    const resultRef = useRef({
        words:0,
        duration:parseInt(location.state.time),
        char_with_spaces:0,
        keystrokes:0,
        story_id:-1,
        mistakes:{}
    })

    useEffect(()=>{
        api.post('/story',location.state.data)
        .then(({data})=>{
            setStory(data.content.split(/(\s+)/))
            setMsg({
                isOpen:true,
                status:"Success",
                message:"Story Fetched Successfully"
            })
            resultRef.current.story_id=data.id
        }).catch(({response})=>{
            setMsg({
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            console.log(response)
            navigate('/playground')
        })
    },[])

    const keyPrevention =(e)=>{
        let text = e.target.value
        e.key=='Backspace'&&(text[text.length-1]==' '||location.state.backspace)&&e.preventDefault()
    }
    const typing = (e) =>{
        pauseTimer&&setPauseTimer(false)
        resultRef.current.keystrokes+=1
        if(e.key == ' '){
            let writtenText = e.target.value
            let currentWord = writtenText.slice(writtenStory.current.length,writtenText.length-1)
            setWordCount(resultRef.current.words = wordCount+1)
            if(currentWord!==story[wordCount*2])
                resultRef.current.mistakes[`[${story[wordCount*2]}]`]=`[${currentWord}]`
            writtenStory.current = writtenText
        }else if(/^[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/.test(e.key)){
            resultRef.current.char_with_spaces+=1
        }
    }
    const timeOut = ()=>{
        console.log(resultRef.current)
        setTypingDisabled(true)
        api.post('/store-test',resultRef.current)
        .then(({data})=>{
            setMsg({
                isOpen:true,
                status:data.state,
                message:data.message
            })
        }).catch(({response})=>{
            setMsg({
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            console.log(response)
        })
        navigate('/results')
    }
    return(
    <div className='playContainer'>
		<div className="contentContainer test">
			<div className="textContainer" id="readable">
                {!location.state.highlight?
                    <p>{story}</p>:
				    <TextContent story={story} highlightingIndex={wordCount*2}/>
                }
			</div>
            <hr className='divider' />
			<div className="textContainer" id="writable">
				<textarea 
                    placeholder="start typing..." 
                    onKeyDown={(e)=>keyPrevention(e)} 
                    onKeyUp={(e)=>typing(e)}
                    disabled={typingDisabled}
                />
			</div>
		</div>
		<div className="contentContainer info">
            <div style={{position:'absolute',top:'0em'}}><ToggleDarkLight/></div>
            <img width="100em" src={logo} alt="Logo" />
			<h2 id="userName">{userDetails.user.name.toUpperCase()}</h2>
            <hr className='divider' />
			<Timer second={second} setSecond={setSecond} pause={pauseTimer} timeOut={timeOut}/>
			<WordCount value={wordCount}/>
			<Button value={'Restart'} style={{width:'10em'}}/>
			<Button  value={!pauseTimer?'Pause':'Resume'} transparancy={true} onClick={()=>{
                setPauseTimer(!pauseTimer)
                setTypingDisabled(pauseTimer)
            }}/>
		</div>
	</div>
    )
}

export default Play;