import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import api from '../../api';
import AccuracyWpmChart from '../../components/accuracyWpmChart/AccuracyWpmChart';
import Card from '../../components/card/Card';
import CardContainer from '../../components/cardContainer/CardContainer';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Loading from '../../components/loading/Loading';
import Retry from '../../components/retry/Retry';
import { Context } from '../../ContextAPI';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';

import './Dashboard.css';

const Dashboard = () => {
    useAuthInterceptor();
    const [loading, setLoading] = useState(true);
    const [retry, setRetry] = useState(false);
    const { responsive, userDetails } = useContext(Context);
    const [wpm, setWpm] = useState([]);

    useEffect(() => {
        api.get('/dashboard')
            .then(({ data }) => {
                setWpm([
                    {
                        value: data.avg_total_today.avg_wpm,
                        unit: 'WPM',
                        cardHead: 'Average',
                        more: false,
                    },
                    {
                        value: data.last_attempt_wpm.wpm,
                        unit: 'WPM',
                        cardHead: 'Last Attempt',
                        more: false,
                    },
                    {
                        value: data.avg_total_today.total_tests,
                        unit: 'Tests',
                        cardHead: 'Total Attempts',
                        more: false,
                    },
                    {
                        value: data.avg_total_today.today_tests,
                        unit: 'Tests',
                        cardHead: 'Today Attempts',
                        more: false,
                    },
                ]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setRetry(true);
            });
    }, [retry]);

    if (loading) {
        return <Loading />;
    } else if (retry) {
        return <Retry retry={() => setRetry(false)} to="/dashboard" />;
    }

    return (
        <>
            <p className="sectionHead">DASHBOARD</p>
            <div className="dashboardContent">
                <div className="welcomeContainer">
                    <h1 className="highlight">Namaste, {userDetails.user.name.split(' ')[0]}</h1>
                    <h3>Welcome to Typathon</h3>
                    <p style={{ float: !responsive ? 'right' : 'left' }}>
                        Joined on {format(new Date(userDetails.user.created_at), 'MMM d, yyyy')}
                    </p>
                    <Hyperlink
                        style={{ marginTop: '.5em', float: 'left' }}
                        type="premium"
                        href="/advance-analytics"
                        value="Advance Analytics"
                    />
                </div>
                <CardContainer>
                    {wpm.map((item, index) => (
                        <Card key={index} val={item} />
                    ))}
                </CardContainer>
                <AccuracyWpmChart width={'50%'} />
                <div className="eventContainer" style={{ width: responsive ? '98%' : '40%' }}>
                    Events are comming soon
                </div>
            </div>
        </>
    );
};

export default Dashboard;
