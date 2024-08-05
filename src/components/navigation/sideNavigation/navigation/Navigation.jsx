import { Link } from 'react-router-dom';
import './Navigation.css';
import { useContext } from 'react';
import { Context } from '../../../../ContextAPI';
 
const Navigation=(props)=>{
    const {lightMode} = useContext(Context)
    const color=!lightMode?{
        clicked:props.isClicked?props.menu.icons[1]:props.menu.icons[3],
        text:props.isClicked?'#5000ff':'#101010'
    }:{
        clicked:props.isClicked?props.menu.icons[0]:props.menu.icons[2],
        text:props.isClicked?'#00ff85':'#efefef'
    }
    
    return(
        <Link 
            className='navigation' 
            to={props.menu.href}
            onClick={()=>props.setClickedMenu(props.id)}
        >
            <img width="30px" src={color.clicked} alt="menu" />
            {props.sideNavOpen&&<span style={{color:color.text}}>{props.menu.value}</span>}
        </Link>
    )
}

export default Navigation;