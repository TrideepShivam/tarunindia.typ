import { Link } from 'react-router-dom';
import './Hyperlink.css'
 
const Hyperlink=(props)=>{
    const typeCollection=['trans-hover','bordered-theme','anchor','themed']
    return(
        <Link className={!props.type?'anchor':props.type} to={props.href&&props.href} onClick={props.onClick?props.onClick:''}>
            {props.value}
        </Link>
    )
}

export default Hyperlink;