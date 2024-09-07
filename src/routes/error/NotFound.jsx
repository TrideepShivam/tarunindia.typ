import './Error.css'
import Logo from '../../assets/logo-reverse.svg'
import Hyperlink from '../../components/hyperlink/Hyperlink';

const NotFound =()=>{
   return(
        <div className='errorContainer'>
            <img src={Logo} alt="logo" />
            <p>404: Page not Found</p>
            <Hyperlink value="Home" href='/'/>
        </div>
    )
}

export default NotFound;