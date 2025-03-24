import Hyperlink from '../hyperlink/Hyperlink';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="about">
                <p className="sectionHead">ABOUT</p>
                <p>
                    Welcome to <span className="highlight">Typathon</span>, your go-to platform for enhancing your
                    typing skills! Our mission is to provide an engaging and effective way for users of all levels to
                    improve their typing speed and accuracy. Whether you’re a beginner just starting out or an
                    experienced typist looking to refine your skills, our customizable tests and user-friendly interface
                    make practice enjoyable and productive. Join us on your journey to becoming a{' '}
                    <span className="highlight">typing pro!</span>
                </p>
            </div>
            <div className="contact">
                <p className="sectionHead">CONTACT</p>
                <h2>TARUN INDIA INSTITUTE</h2>
                <p>In Front of Police Station, ward no-13,</p>
                <p>Madhepura, Bihar, India</p>
                <p>852113</p>
                <h3 className="highlight" style={{ wordBreak: 'break-all' }}>
                    info@typathon.com
                </h3>
                <h3 className="highlight">9546747447</h3>
            </div>
            <div className="lastRibbon">
                <span className="highlight">
                    <span>terms & services </span>
                    <span>privacy policy</span>
                </span>
                <span>
                    <span>copyright @ 2024 </span>
                    <Hyperlink href={'www.typathon.com'} value="typathon.com" />
                </span>
            </div>
        </div>
    );
};

export default Footer;
