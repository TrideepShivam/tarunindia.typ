import './Loading.css'
import loading from '../../assets/loading-koala.gif'

const Loading =()=>{

    return(
        <div className='loadingContainer'>
            <img width='150px' src={loading} alt="" />
            <p className='highlight'>Wait for a while...</p>
        </div>
    )
}

export default Loading;