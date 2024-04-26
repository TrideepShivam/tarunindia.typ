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
 
const Play=()=>{    
    const {userDetails,setMsg} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [story,setStory] = useState('Text');
    useEffect(()=>{
        api.post('/story',location.state.data)
        .then(({data})=>{
            setStory(data.data.content)
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
    return(
    <div className='playContainer'>
		<div className="contentContainer test">
			<div className="textContainer" id="readable">
				<p id="read">{story}</p>
			</div>
            <hr className='divider' />
			<div className="textContainer" id="writable">
				<textarea id="write" placeholder="start typing..." onKeyDown="backspacePrevent(event,this.value)" onKeyUp="typing(this,event)"></textarea>
			</div>
		</div>
		<div className="contentContainer details" id="userProfile">
            <div style={{position:'absolute',top:'0em'}}><ToggleDarkLight/></div>
            <img width="100em" src={logo} alt="Logo" />
			<p id="userName">{userDetails.user.name}</p>
			<Timer time={10} pause={false}/>
			<WordCount value={0}/>
			<Button value={'Restart'} style={{width:'10em'}}/>
			{/* <button className="btn" id="giveup" onClick="frontPopup(true);dashborad(Result);">GIVE UP</button> */}
            
		</div>
	</div>
    )
}

export default Play;