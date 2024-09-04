import InformationContainer from '../../components/informationContainer/InformationContainer';
import './About.css'
 
const About=()=>{
    return(
    <>
        <p className="sectionHead">ABOUT</p>
        <div className="aboutContent">
            <InformationContainer>
                <p>Information</p>
            </InformationContainer>
        </div>
    </>
    )
}

export default About;