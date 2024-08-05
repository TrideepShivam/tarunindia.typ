import './Loading.css'
import loading from '../../assets/loading-mouse.gif'

const Loading =()=>{

    return(
        <div className='loadingContainer'>
            <img src={loading} alt="" />
            <p>Wait for a while...</p>
        </div>
    )
}

export default Loading;