import './Home.css'
import Button from '../../components/button/Button';
import ShowCard from '../../components/ShowCard/ShowCard';
import BlurImgDiv from '../../components/blurImgDiv/BlurImgDiv';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import designer1 from '../../assets/Designer1.jpeg.jpg';
import designer2 from '../../assets/Designer2.jpeg.jpg';
import DotLineBox from '../../components/dotLineBox/DotLineBox';
import why11 from '../../assets/login-dark.png';
import why12 from '../../assets/login-light.png';
import why21 from '../../assets/form-dark.png';
import why22 from '../../assets/form-light.png';
import why31 from '../../assets/play-dark.png';
import why32 from '../../assets/play-light.png';
import why41 from '../../assets/report-dark.png';
import why42 from '../../assets/report-light.png';
import InstLogo from '../../assets/institute-logo.jpg'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();
    let feature = [{ header: "USER FRIENDLY", content: "A user-friendly interface to make your typing practice easier to use and grow" }, { header: "MANGAL FONT", content: "Get not only English typing even Mangal font typing test is also there to make you prepared for Government exams." }, { header: "PROGRESS TRACKING", content: "A better progress tracking interface to track your WPM and Accuracy and also get the detailed version of results." }, { header: "SUPPORT SYSTEM", content: "12+ hrs supporting team to cover all the inconveniences during your app use. Nothing can distract you from your goals. " }]
    const workflow = [{ dot: "left", image: { dark: why11, light: why12 }, head: "Enter The World", short: "STEP 01" }, { dot: "right", image: { dark: why21, light: why22 }, head: "Fill the form", short: "STEP 02" }, { dot: "left", image: { dark: why31, light: why32 }, head: "Attempt Test", short: "STEP 03" }, { dot: "right", image: { dark: why41, light: why42 }, head: "Track Progess", short: "STEP 04" }]
    const whyDetail=[{head:"TRUSTWORTHY",content:"A better progress tracking interface to track your WPM and Accuracy and also get the detailed version of results."},{head:"ENGAGEMENT",content:"A better progress tracking interface to track your WPM and Accuracy and also get the detailed version of results."},{head:"SUPPORT",content:"A better progress tracking interface to track your WPM and Accuracy and also get the detailed version of results."}];
    return (
        <div className='parent'>
            <BlurImgDiv image={designer1} style={{ backgroundAttachment: "fixed",height:90+"vh" }} adjust={{height:100+"%"}}>
                <h1>Tarun India Typing</h1>
                <p>A typing test Platform to Learn, Grow & Earn</p>
                <Button value="Explore" style={{ width: 15 + "%" }} ></Button>
            </BlurImgDiv>

            <div className="feature">
                <p className="sectionHead" style={{ fontSize: 30 + "px", marginLeft:.5+"em" }}>FEATURES</p>
                <div className="featureBox">
                    {
                        feature.map((a,index) => <ShowCard key={index} header={a.header} content={a.content} ></ShowCard>)
                    }
                </div>
            </div>

            <div className="whoWeAre">
                        <p className="sectionHead" style={{ fontSize: 30 + "px", marginLeft:2+"em",height:"max-Content", width:90+"%"}}>WHO WE ARE</p>
                        <div className="detailWho">
                            <p style={{fontSize:19+"px"}}>
                            A unit of <span className="highlight">TARUN INDIA INSTITUTE</span> of technical training, Madhepura, Bihar, India. Estd. in <span className="highlight">1989</span> and reg no is <span className="highlight">329-90</span>. <span className="highlight"> 10000+</span> students have registered within our Organization, <span className="highlight">2000+</span> Certificates have issued, <span className="highlight">1500+</span> students got the Government Jobs and <span className="highlight"></span> students are Entrepreneur.
                            </p>
                            <div className="socialMedia">
                            <Hyperlink 
                    onClick={()=>window.location.href='https://www.youtube.com/channel/UChbMJR4lwYEqA9sIa6bI7fg/'} 
                    value={<img  src="https://img.icons8.com/color/40/youtube-play.png" alt="youtube" />}/>
                    <Hyperlink 
                    onClick={()=>window.location.href='https://whatsapp.com/channel/0029VaiLTTTLtOjHBKi3ox3s'} 
                    value={ <img  src="https://img.icons8.com/color/40/whatsapp.png" alt="whatsapp" />}/> 
                    <Hyperlink 
                    onClick={()=>window.location.href='#'} 
                    value={ <img  src="https://img.icons8.com/color/40/facebook.png" alt="facebook" />}/> 
                            
                           
                            </div>
                        </div>
                        <div className="imageWho">
                            <img src={InstLogo} height={400+"em"} width={400+'em'}/>
                        </div>
                  
            </div>
            <BlurImgDiv image={designer2} adjust={{ gap: 7 + "vh" ,padding:"5% 0%"}}>
                <p className="sectionHead" style={{ fontSize: 30 + "px", width: 90 + "%" }}>WHY US</p>
                <div className='whyBox'>
                    {whyDetail.map((data,index)=><div key={index} className='whyDetail'><h3 style={{color:"#00ff85"}}>{data.head}</h3><p>{data.content}</p></div>)}
                </div>
                    <Button value="JOIN NOW" onClick={()=>navigate('/login')} style={{ width: 15 + "%" }}></Button>
            </BlurImgDiv>
            
            <div className="workFlow">
                <p className="sectionHead" style={{ fontSize: 30 + "px", marginBottom: 3 + "%", width: 80 + "%" }}>WORK FLOW</p>
                {
                    workflow.map((a, index) => <DotLineBox key={index} dot={a.dot} image={a.image} head={a.head} short={a.short} />)
                }
            </div>
            <div className="lastDiv">
                <div className="about">
                    <p className="sectionHead">ABOUT</p>
                    <p>
                        Welcome to <span className="highlight">Tarun India Typing</span>, your go-to platform for enhancing your typing skills! Our mission is to provide an engaging and effective way for users of all levels to improve their typing speed and accuracy. Whether you’re a beginner just starting out or an experienced typist looking to refine your skills, our customizable tests and user-friendly interface make practice enjoyable and productive. Join us on your journey to becoming a <span className="highlight">typing pro!</span>
                    </p>
                </div>
                <div className="contact">
                    <p className="sectionHead">CONTACT</p>
                    <h2>TARUN INDIA INSTITUTE</h2>
                    <p>In Front of Police Station, ward no-13,</p>
                    <p>Madhepura, Bihar, India</p>    
                    <p>852113</p>    
                    <h3 className="highlight">tarunindia1989@gmail.com</h3>
                    <h3 className="highlight">9709483986</h3>
                </div>
                <div className="lastRibbon">
                    <span className='highlight'><span>terms & services </span>
                        <span>privacy policy</span></span>

                    <span><span>copyright @ 2024</span><Hyperlink value=" tarunindia.in"></Hyperlink></span>
                </div>
            </div>

        </div>
    )
}

export default Home;