import { Link } from 'react-router-dom';
import './Hyperlink.css'
 
const Hyperlink=(props)=>{
    return(
        <Link className='anchor' to={props.href}>
            {props.value}
        </Link>
    )
}

export default Hyperlink;