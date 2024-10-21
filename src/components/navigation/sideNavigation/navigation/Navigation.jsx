import { Link } from 'react-router-dom';
import './Navigation.css';
import { useContext, useState } from 'react';
import { Context } from '../../../../ContextAPI';
 
const Navigation=(props)=>{
    
    let darkThemeColor = import.meta.env.VITE_APP_DARK_THEME||'#ff8833'
    let lightThemeColor= import.meta.env.VITE_APP_LIGHT_THEME||'#138808'
    const {lightMode} = useContext(Context)
    const [showTooltip,setShowtooltip] = useState(false)
    const color=!lightMode?{
        clicked:props.isClicked?props.menu.icons[1]:props.menu.icons[3],
        text:props.isClicked?lightThemeColor:'#101010'
    }:{
        clicked:props.isClicked?props.menu.icons[0]:props.menu.icons[2],
        text:props.isClicked?darkThemeColor:'#efefef'
    }
    
    return(
        <div className='navigationContainer'>
        <Link 
            onMouseOver={()=>setShowtooltip(props.sideNavOpen?false:true)}
            onMouseLeave={()=>setShowtooltip(false)}
            className='navigation' 
            to={props.menu.href}
            onClick={()=>props.setClickedMenu(props.id)}
        >
            <img width="30px" src={color.clicked} alt="menu" />
            {props.sideNavOpen&&<span style={{color:color.text}}>{props.menu.value}</span>}
        </Link>
        {showTooltip&&<p className='tooltip'>{props.menu.value[0]+props.menu.value.substring(1).toLowerCase()}</p>}
        </div>
    )
}

export default Navigation;