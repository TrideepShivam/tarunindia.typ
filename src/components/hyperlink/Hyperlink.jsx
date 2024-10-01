import { Link } from 'react-router-dom';
import './Hyperlink.css'
 
const Hyperlink=(props)=>{
    return(
        <Link className={!props.type?'anchor':'buttonLike'} to={props.href} onClick={props.onClick?props.onClick:''}>
            {props.value}
        </Link>
    )
}

export default Hyperlink;