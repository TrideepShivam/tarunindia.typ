import Hyperlink from '../../../components/hyperlink/Hyperlink';
import img from '../../../assets/hero_img.png';
import './Hero.css';
 
const Hero=()=>{
    return(
        <div className='hero'>
            <div className="heroContent">
                <h1 className="heroTitle">typ-A-thon</h1>
                <h2>Boost your typing skill</h2>
                <p>Discover the ultimate typing test platform to enhance your speed and accuracy in multi-language support. This app supports Mangal Font too.</p>
                <p>See <span className="highlight">Demo</span> use.</p>
                <div className="heroButtonContainer">
                    <Hyperlink
                        onClick={()=>{}}
                        href='/demo'
                        value='Take a Demo'
                        type='themed'
                        icon="https://img.icons8.com/ios/18/color/external-link.png"
                    />
                    <Hyperlink
                        onClick={()=>{}}
                        href='/register'
                        value='Register for free'
                    />
                </div>
            </div>
            <img className='heroImg' src={img} alt="hero" />
        </div>
    )
}

export default Hero;