import './Support.css'
import InformationContainer from '../../components/informationContainer/InformationContainer';

const Support=()=>{
    return(
    <>
        <p className="sectionHead">SUPPORT</p>
        <div className="supportContent">
        <InformationContainer>
                <p className="highlight">Need Help? We’re Here for You!</p>
                <p style={{textIndent:'2em'}}>Our support system is designed to assist you with any questions or issues you may encounter while using our Typing Test Web App. Whether you need help with setting up your test, understanding your results, or troubleshooting technical problems, our dedicated support team is ready to provide you with prompt and effective assistance. Simply reach out to us through: </p>
                <h3 className="sectionHead">Whatsapp:</h3>
                <p>Prompt or Message your issue to us on Whatsapp.</p>
                <div style={{display:'flex',gap:'.5em',alignItems:'center',marginBottom:'1em'}}>
                    <img  src="https://img.icons8.com/color/40/whatsapp.png" alt="youtube" />
                    <h2>9709483986</h2>
                </div>
                <h3 className="sectionHead">Email:</h3>
                <p>You can Email us you issues on.</p>
                <div style={{display:'flex',gap:'.5em',alignItems:'center',marginBottom:'1em'}}>
                    <img  src="https://img.icons8.com/color/40/gmail.png" alt="youtube" />
                    <h2>tarunindia1989@gmail.com</h2>
                </div>
                <h3 className="sectionHead">Address:</h3>
                <p>Discuss your issue Face to Face.</p>
                <div style={{display:'flex',flexDirection:'column',marginBottom:'1em'}}>
                    <h2 className="highlight">Tarun India Institute</h2>
                    <h3>In front of police station, ward-13</h3>
                    <h3>Madhepura, Bihar, India</h3>
                    <h3>852113</h3>
                </div>
                <p style={{textIndent:'2em'}}>We’ll ensure you get the help you need to make the most of your typing practice. Nothing can be your Obstactle to <span className="highlight">Learn, Grow and Earn!</span></p>
             </InformationContainer>
        </div>
    </>
    )
}

export default Support;