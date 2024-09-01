import './Home.css'
import Button from '../../components/button/Button';
import ShowCard from '../../components/ShowCard/ShowCard';
import BlurImgDiv from '../../components/blurImgDiv/BlurImgDiv';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import designer1 from '../../assets/Designer1.jpeg.jpg';
import designer2 from '../../assets/Designer2.jpeg.jpg';
import DotLineBox from '../../components/dotLineBox/DotLineBox';
import why1 from '../../assets/login-dark.png';
import why2 from '../../assets/form-dark.png';
import why3 from '../../assets/play-dark.png';
import why4 from '../../assets/report-dark.png';

 
const Home = () => {
    const sty={justifyContent:"flex-start"}
    let feature = [{ header: "Gamimg", content: "comming soon" }, { header: "Gamimg", content: "comming soon" }, { header: "Gamimg", content: "comming soon" }, { header: "Gamimg", content: "comming soon" }]
    return (
        <div className='parent'>
            <BlurImgDiv image={designer1} style={{backgroundAttachment:"fixed"}}>
                <h1>Traun India Typing</h1>
                <p>A typing test Platform to Learn, Grow & Earn</p>
                <Button value="Explore" style={{ width: 15 + "%" }}></Button>
            </BlurImgDiv>

            <div className="feature">
                <p className="sectionHead" style={{ fontSize: 30 + "px" }}>FEATURES</p>
                <div className="featureBox">
                    {
                        feature.map((a) =>

                            <ShowCard header={a.header} content={a.content} style={{ margin: 4 + "%" }}></ShowCard>
                        )
                    }

                </div>
            </div>
             <BlurImgDiv image={designer2} adjust={{gap:50+"%"}}>
                <p className="sectionHead" style={{ fontSize: 30 + "px" }}>WHY US</p>
                <Button value="JOIN NOW" style={{ width: 15 + "%" }}></Button>
            </BlurImgDiv>
            <div className="workFlow">
                <p className="sectionHead" style={{ fontSize: 30 + "px" , marginBottom:3+"%"}}>WORK FLOW</p>
                <DotLineBox dot="left" image={why1}></DotLineBox>
                <DotLineBox dot="right" image={why2}></DotLineBox>
                <DotLineBox dot="left"  image={why3}></DotLineBox>
                <DotLineBox dot="right"  image={why4}></DotLineBox>
            </div>
            <div className="lastDiv">
                <div className="about">
                <p className="sectionHead" style={{ fontSize: 30 + "px" }}>ABOUT</p>
                    <p></p>
                </div>
                <div className="contact">

                <p className="sectionHead" style={{ fontSize: 30 + "px" }}>CONTACT</p>
                <p></p>
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