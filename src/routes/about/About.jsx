import InformationContainer from '../../components/informationContainer/InformationContainer';

import './About.css';

const About = () => {
    return (
        <>
            <p className="sectionHead">ABOUT</p>
            <div className="aboutContent">
                <InformationContainer>
                    <p style={{ textIndent: '2em' }}>
                        Welcome to <span className="highlight">Typathon</span>, your go-to platform for enhancing your
                        typing skills! Our mission is to provide an engaging and effective way for users of all levels
                        to improve their typing speed and accuracy. Whether you’re a beginner just starting out or an
                        experienced typist looking to refine your skills, our customizable tests and user-friendly
                        interface make practice enjoyable and productive. Join us on your journey to becoming a typing
                        pro! Here are some of the standout features:
                    </p>
                    <p className="highlight">User-Friendly Interface:</p>
                    <p>
                        Our intuitive and clean design ensures that you can easily navigate through the app and focus on
                        improving your typing skills without any distractions.
                    </p>
                    <p className="highlight">Comprehensive Support System:</p>
                    <p>
                        Need help? Our dedicated support team is always ready to assist you with any questions or issues
                        you may encounter.
                    </p>
                    <p className="highlight">Mangal Font Facility:</p>
                    <p>
                        For those who prefer typing in Hindi, we offer the Mangal font, making it easier and more
                        comfortable to practice typing in your preferred language.
                    </p>
                    <p className="highlight">Engaging Events:</p>
                    <p>
                        Participate in various typing events and challenges to keep your practice sessions exciting and
                        competitive.
                    </p>
                    <p className="highlight">Progress Tracking:</p>
                    <p>
                        Monitor your improvement over time with our graphical progress tracking feature. See how your
                        speed and accuracy evolve with each test you take.
                    </p>
                    <p style={{ textIndent: '2em' }}>
                        Whether you’re a beginner just starting out or an experienced typist looking to refine your
                        skills, our customizable tests and user-friendly interface make practice enjoyable and
                        productive. Join us on your journey to becoming a <span className="highlight">typing pro!</span>
                    </p>
                </InformationContainer>
            </div>
        </>
    );
};

export default About;
