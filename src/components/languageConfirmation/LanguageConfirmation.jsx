import { useContext, useRef } from 'react';
import PopUpContainer from '../popUpContainer/PopUpContainer';
import './LanguageConfirmation.css'
import { Context } from '../../ContextAPI';
import Textbox from '../textbox/Textbox';
import Checkbox from '../checkbox/Checkbox';
import Button from '../button/Button';
import Hyperlink from '../hyperlink/Hyperlink';
import api from '../../api';
 
const LanguageConfirmation=({setTypingDisabled,setSkipIntro,language})=>{
    const confirmRef = useRef("")
    const checkedRef = useRef(false)
    const shownText=()=>{
        if(language.toLowerCase()=='mangal'){
            return 'तरूण इंडिया'
        }else if(language.toLowerCase()=='krutidev'){
            return 'r:.k bafM;k'
        }else{
            return 'Tarun India'
        }
    }
    const {lightMode,setMsg} = useContext(Context);
    const img = <img width="25" height="25" src={
        !lightMode?"https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png":
                "https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png"
    } alt="back"/>;
    
    const confirm = ()=>{
        setSkipIntro(true)
        setTypingDisabled(false)
        checkedRef.current&&api.patch('/auth/skip-intro',{
            skipintro:checkedRef.current
        })
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
        })
        
    }
    const handleConfirm = ()=>{
        if(confirmRef.current.value==shownText()){
            confirm()
        }else{
            setMsg({
                isOpen:true,
                status:'Error',
                message:'Matching Failed, Try again.'
            })
            confirmRef.current.value=""
            confirmRef.current.focus()
        }
    }
    return(
        <PopUpContainer>
            <div className="confirmationBox">
                <h3 className="sectionHead">Layout Confirmation</h3>
                <p>Please change your system’s <span className="highlight"> Keyboard Layout</span> according to your language option then write down the given word as same as given below.</p>
                <p>To change keyboard layout press <span className="highlight"> ALT+Shift</span>. If layout doesn’t get change or feels other difficulty then please contact us on <span><Hyperlink href={'/support'} value='Support'/></span> channel.</p>
                <p>Type ‘ 
                    <span style={{color:'tomato',fontFamily:language.toLowerCase()=='krutidev'&&'krutidev'}}>
                        {shownText()}
                    </span> 
                ’ in the below input box:</p>
                <Textbox style={{fontFamily:language.toLowerCase()=='krutidev'&&'krutidev'}} var={confirmRef} legend="Type"/>
                <Checkbox checkedRef={checkedRef} value="Remember to skip" transparent={false}/>
                <div style={{display:'flex',width:'100%',gap:'.2em'}}>
                    <Button onClick={handleConfirm} value="Confirm"/>
                    <Button onClick={confirm} style={{width:'50%'}} value="Skip" transparancy={true}/>
                </div>
            </div>
        </PopUpContainer>
    )
}

export default LanguageConfirmation;