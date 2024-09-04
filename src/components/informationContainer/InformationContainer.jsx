import './InformationContainer.css'
import yt from './../../assets/yt-qr.png'
import wa from './../../assets/wa-qr.png'
import Hyperlink from '../hyperlink/Hyperlink'
const InformationContainer=({children})=>{
    return(
        <div className="informationContainer">
            <div className="information">
                {children}
                <p style={{textAlign:'right'}}>Team <br /><Hyperlink href='/' value='tarunindia.in'/></p>
            </div>
            <div className="commonInformation">
                <p className="sectionHead">SCAN TO SUBSCRIBE US</p>
                <p>Get Notified via <Hyperlink 
                    onClick={()=>window.location.href='https://www.youtube.com/channel/UChbMJR4lwYEqA9sIa6bI7fg/'} 
                    value='Youtube'/> and <Hyperlink 
                    onClick={()=>window.location.href='https://whatsapp.com/channel/0029VaiLTTTLtOjHBKi3ox3s'} 
                    value='Whatsapp'/> channel.
                </p>
                <div className='qrcontainer'>
                    <div>
                        <img width={'70%'} src={yt} alt="youtube" />
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img  src="https://img.icons8.com/color/40/whatsapp.png" alt="youtube" />
                            <p>tarunindia.in</p>
                        </div>
                    </div>
                    <div>
                        <img width={'70%'} src={wa} alt="whatsapp" />
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img  src="https://img.icons8.com/color/40/youtube-play.png" alt="youtube" />
                            <p>@tarunindiainstitute</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationContainer;