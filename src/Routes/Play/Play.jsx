import { useContext, useEffect, useState } from 'react';
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
    const {userDetails,setMsg} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [story,setStory] = useState(['Text']);
    const [wordCount,setWordCount] = useState(0);
    useEffect(()=>{
        api.post('/story',location.state.data)
        .then(({data})=>{
            setStory(data.data.content.split(/(\s+)/))
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
            navigate('/playground')
        })
    },[])

    const keyPrevention =(e)=>{
        // console.log(e.target.value)
    }

    const typing = (e) =>{
        e.key == ' '&&setWordCount((count)=>count+1)
    }
    return(
    <div className='playContainer'>
		<div className="contentContainer test">
			<div className="textContainer" id="readable">
				<TextContent story={story} highlightingIndex={wordCount*2}/>
			</div>
            <hr className='divider' />
			<div className="textContainer" id="writable">
				<textarea placeholder="start typing..." onKeyDown={(e)=>keyPrevention(e)} onKeyUp={(e)=>typing(e)}></textarea>
			</div>
		</div>
		<div className="contentContainer details" id="userProfile">
            <div style={{position:'absolute',top:'0em'}}><ToggleDarkLight/></div>
            <img width="100em" src={logo} alt="Logo" />
			<h2 id="userName">{userDetails.user.name.toUpperCase()}</h2>
            <hr className='divider' />
			<Timer time={10} pause={true}/>
			<WordCount value={wordCount}/>
			<Button value={'Restart'} style={{width:'10em'}}/>
			{/* <button className="btn" id="giveup" onClick="frontPopup(true);dashborad(Result);">GIVE UP</button> */}
			<Button value={'Give Up'} transparancy={true}/>
		</div>
	</div>
    )
}

export default Play;