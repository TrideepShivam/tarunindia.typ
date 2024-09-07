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
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import LanguageConfirmation from '../../components/languageConfirmation/LanguageConfirmation';
 
const Play=()=>{
    useAuthInterceptor()
    const [skipIntro,setSkipIntro]= useState(true)
    const [loading,setLoading] =useState(true)
    const [pauseTimer,setPauseTimer] = useState(true)
    const writtenStory = useRef("")
    const {userDetails,setMsg} = useContext(Context)
    const navigate = useNavigate()    
    const location = useLocation()
    const time = parseInt(location.state?location.state.time:'0')
    const [story,setStory] = useState(['Text']);
    const [wordCount,setWordCount] = useState(0);
    const [typingDisabled,setTypingDisabled]=useState(true)
    const [wrong,setWrong] = useState(false)
    const [second,setSecond] = useState(time*60)
    const resultRef = useRef({
        words:0,
        duration:time,
        char_with_spaces:0,
        keystrokes:0,
        story_id:-1,
        mistakes:{}
    })

    useEffect(()=>{
        if(!location.state){//prohibiting direct /play url hit
            setMsg({
                isOpen:true,
                status:'Error',
                message:'Please fill the Play Form first.'
            })
            navigate('/playground',{replace:true})
        }else
            api.post('/story',location.state.data)
            .then(({data})=>{
                setStory(data.storyDetails.content.split(/(\s+)/))
                resultRef.current.story_id=data.storyDetails.id
                setSkipIntro(data.skipIntro)
                setLoading(false)
                data.skipIntro&&setTypingDisabled(false)
            }).catch(({response})=>{
                setMsg({
                    isOpen:true,
                    status:response.data.state,
                    message:response.data.message
                })
                navigate('/playground',{replace:true})
            })
    },[])
    if(loading){
        return <Loading/>
    }
    
    const keyPrevention =(e)=>{
        let text = e.target.value
        e.key=='Backspace'&&(text[text.length-1]==' '||location.state.backspace)&&e.preventDefault()
    }
    const altCode={
        '☺':'ँ',//२३०५
        '↓':'ङ',//२३२९
        '▲':'ञ',//२३३४
        'P':'ॐ',//२३८४
        '[':'ज़',//२३९५
        '\\':'ड़',//२३९६
        ']':'ढ़',//२३९७
        '^':'फ़',//२३९८
        'e':'॥',//२४०५
        'f':'०',//२४०६
        'p':'॰',//२४१६
        'ô':'“',//147
        'ö':'”',//148
    }
    let isSpecialChar=false
    const removeSpecialChar=(e)=>{
        if(isSpecialChar&&getFont()=='Mangal'){
            let content = e.target.value
            let newContent=content.slice(0,-1)
            e.target.value = newContent
            isSpecialChar=false
            console.log(writtenStory.current)
        }
    }
    const typing = (e) =>{
        pauseTimer&&setPauseTimer(false)
        wrong&&setWrong(false)
        resultRef.current.keystrokes+=1
        if(e.code == 'Space'){
            let writtenText = e.target.value.split(/(\s+)/)
            e.target.setSelectionRange(e.target.value.length,e.target.value.length)
            // let currentWord = writtenText.slice(writtenStory.current.length,writtenText.length-1)//here we dont use length-1 we have to find previous space index then till that index we have to use it
            if(writtenText.length!=resultRef.current.words*2+1){
                setWordCount(resultRef.current.words = wordCount+1)
                let shownWord = story[wordCount*2]//this solution reduces the time to compare
                let currentWord = writtenText[wordCount*2]
                console.log(currentWord,shownWord,currentWord.split(''),shownWord.split(''),currentWord===shownWord)
                if(currentWord!==shownWord){
                    resultRef.current.mistakes[`${shownWord}`]=`${currentWord}`
                    setWrong(true)
                }
                writtenStory.current = writtenText
            }
        }else if(altCode[e.key]&&getFont()=='Mangal'){
            e.preventDefault()
            let code = altCode[e.key]
            let content = e.target.value
            e.target.value=content+code
            isSpecialChar=true
        }
        
        if(/^[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/.test(e.key)){
            resultRef.current.char_with_spaces+=1
        }
    }
    const timeOut = ()=>{
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
            !loading&&navigate('/results',{replace:true})
        }).catch(({response})=>{
            setMsg({
                isOpen:true,
                status:response.data.state,
                message:response.data.message
            })
            setLoading(false)
            console.log(response)
        })
    }
    const getFont = ()=>{
        let lang = location.state.data.language
        if(lang.toLowerCase()=='english')
            return 'arial'
        else
            return lang
    }
    
    return(
    <div className='playContainer'>
        {!skipIntro&&<LanguageConfirmation setTypingDisabled={setTypingDisabled} setSkipIntro={setSkipIntro} language={location.state.data.language}/>}
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
                    onInput={(e)=>removeSpecialChar(e)}
                    disabled={typingDisabled}
                />
			</div>
		</div>
		<div className="contentContainer info">
            <div style={{position:'absolute',top:'0em'}}><ToggleDarkLight/></div>
            <img width="100em" src={logo} alt="Logo" />
			<h2 id="userName">{userDetails.user.name.toUpperCase()}</h2>
			<Timer percentage={(second/(parseInt(location.state.time)*60))*100} second={second} setSecond={setSecond} pause={pauseTimer} timeOut={timeOut}/>
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