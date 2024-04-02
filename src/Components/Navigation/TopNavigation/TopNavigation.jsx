import './TopNavigation.css'
import logo from '../../../assets/logo-reverse.svg'
import ToggleDarkLight from '../../ToggleDarkLight/ToggleDarkLight';
const TopNavigation=()=>{
    return(
        <div className="topNavigation">
            <img width="50em" src={logo} alt="Logo" />
            <ToggleDarkLight/>
        </div>
    )
}

export default TopNavigation;