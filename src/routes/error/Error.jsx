import './Error.css'
import Logo from '../../assets/logo-reverse.svg'
import Hyperlink from '../../components/hyperlink/Hyperlink';
import { useLocation } from 'react-router-dom';

const Error =()=>{
    const location = useLocation()
    const errMessage = location.state.message?location.state.message:'Something went wrong.'
    const redirectedFrom = location.state.from?location.state.from:'/dashboard'
    return(
        <div className='errorContainer'>
            <img src={Logo} alt="logo" />
            <p>{errMessage}</p>
            <Hyperlink value="Try again" href={redirectedFrom}/>
        </div>
    )
}

export default Error;