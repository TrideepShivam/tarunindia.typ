import { Link } from 'react-router-dom';
import './UserNavigation.css';
import { useContext } from 'react';
import { Context } from '../../../../ContextAPI';
 
const UserNavigation=({item})=>{
    const {lightMode} = useContext(Context)
    
    return(
        <Link 
            className='userNavigation' 
            to={item.href&&item.href}
            onClick={()=>item.action()}
        >
            <img width="30px" src={item.icons[lightMode?0:1]} alt="menu" />
            <span>{item.value}</span>
        </Link>
    )
}

export default UserNavigation;