import './Retry.css'
import logo from '../../assets/logo-reverse.svg'
import Hyperlink from '../hyperlink/Hyperlink'

const Retry =({retry})=>{

    return(
        <div className='retryContainer'>
            <img width='100px' src={logo} alt="" />
            <p>Please Check your internet connection.</p>
            {retry&&<>
                <p>Then retry to submit your Test.</p>
                <Hyperlink onClick={()=>{
                retry&&retry()
            }} type='buttonLike' value='Retry'/>
            </>
            }
            <p>Or go to</p>
            <Hyperlink href='/playground' value='Playground'/>
        </div>
    )
}

export default Retry