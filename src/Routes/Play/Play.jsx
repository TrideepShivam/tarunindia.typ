import { useContext, useEffect, useRef, useState } from 'react';
import './Play.css'
import logo from '../../assets/logo-reverse.svg'
import { Context } from '../../ContextAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api';
import Timer from '../../components/timer/Timer';
import ToggleDarkLight from '../../components/toggleDarkLight/ToggleDarkLight';
import WordCount from '../../components/wordCount/WordCount';
import Button from '../../components/button/Button';
import TextContent from '../../components/textContent/TextContent';
import Loading from '../../components/loading/Loading';
 
const Play=()=>{
    const [loading,setLoading] =useState(true)
    const [pauseTimer,setPauseTimer] = useState(true)
    const writtenStory = useRef("")
    const {userDetails,setMsg} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [story,setStory] = useState(['Text']);
    const [wordCount,setWordCount] = useState(0);
    const [typingDisabled,setTypingDisabled]=useState(false)
    const [wrong,setWrong] = useState(false)
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
            setLoading(false)
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
    if(loading){
        return <Loading/>
    }
    const keyPrevention =(e)=>{
        let text = e.target.value
        e.key=='Backspace'&&(text[text.length-1]==' '||location.state.backspace)&&e.preventDefault()
    }
    const typing = (e) =>{
        pauseTimer&&setPauseTimer(false)
        wrong&&setWrong(false)
        resultRef.current.keystrokes+=1
        if(e.key == ' '){
            let writtenText = e.target.value.split(/(\s+)/)
            // let currentWord = writtenText.slice(writtenStory.current.length,writtenText.length-1)//here we dont use length-1 we have to find previous space index then till that index we have to use it
            if(writtenText.length!=resultRef.current.words*2+1){
                setWordCount(resultRef.current.words = wordCount+1)
                let shownWord = story[wordCount*2]//this solution reduces the time to compare
                let currentWord = writtenText[wordCount*2]
                console.log(shownWord,' ',currentWord)
                if(currentWord!==shownWord){
                    resultRef.current.mistakes[`${shownWord}`]=`${currentWord}`
                    setWrong(true)
                }
                writtenStory.current = writtenText
            }
        }
        if(/^[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/.test(e.key)){
            resultRef.current.char_with_spaces+=1
        }
    }
    const timeOut = ()=>{
        console.log(resultRef.current)
        setLoading(true)
        setTypingDisabled(true)
        api.post('/store-test',resultRef.current)
        .then(({data})=>{
            setMsg({
                isOpen:true,
                status:data.state,
                message:data.message
            })
            setLoading(false)
        }).catch(({response})=>{
            setMsg({
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            setLoading(false)
            console.log(response)
        })
        !loading&&navigate('/results')
    }
    const getFont = ()=>{
        let lang = location.state.data.language
        if(lang=='english')
            return'arial'
        else
            return lang
        }
    return(
    <div className='playContainer'>
		<div className="contentContainer test">
			<div className="textContainer" id="readable">
                {!location.state.highlight?
                    <p>{story}</p>:
				    <TextContent language={getFont()} story={story} highlightingIndex={wordCount*2}/>
                }
			</div>
            <hr className='divider' style={{borderColor:wrong?'tomato':'var(--theme-color)',width:'100%'}}/>
			<div className="textContainer" id="writable">
				<textarea 
                    autoFocus
                    style={{fontFamily:getFont()}}
                    placeholder={getFont()=='Krutidev'?"Vkbi djsa---":"start typing..." }
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