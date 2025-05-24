import Footer from '../../components/footer/Footer';
import Hero from './hero/Hero';

import './Home.css';

const Home = () => {
    let feature = [
        {
            header: 'USER FRIENDLY',
            content:
                'A user-friendly interface designed to make your typing practice easier, smoother, and more effective!',
        },
        {
            header: 'MANGAL FONT',
            content:
                'Get not only English typing even Mangal font typing test is also there to make you prepared for Government exams.',
        },
        {
            header: 'PROGRESS TRACKING',
            content:
                'A better progress tracking interface to track your WPM and Accuracy and also get the detailed version of results.',
        },
        {
            header: 'SUPPORT SYSTEM',
            content:
                '12+ hrs supported team to cover all the inconveniences during app use. Nothing can distract you from your goals.',
        },
    ];

    return (
        <div className="homeContainer">
            <Hero/>
            <Footer />
        </div>
    );
};

export default Home;
