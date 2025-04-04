import { useContext, useEffect, useState } from 'react';
import HeatMapChart from '../../components/heatMapChart/HeatMapChart';
import ToggleDarkLight from '../../components/toggleDarkLight/ToggleDarkLight';
import './AdvanceAnalytics.css';
import { Context } from '../../ContextAPI';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import { format } from 'date-fns';
import AccuracyWpmChart from '../../components/accuracyWpmChart/AccuracyWpmChart';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import api from '../../api';
import Card from '../../components/card/Card';
import Loading from '../../components/loading/Loading';
import Navigation from '../../components/navigation/sideNavigation/navigation/Navigation';

const AdvanceAnalytics = () => {
    useAuthInterceptor();
    const [loading, setLoading] = useState(true);
    const { userDetails, responsive, lightMode } = useContext(Context);
    const [cardData, setCardData] = useState([]);
    const [seriesData, setSeriesData] = useState([]);
    const arrow = !lightMode
        ? 'https://img.icons8.com/ios-filled/25/000000/back.png'
        : 'https://img.icons8.com/ios-filled/25/ffffff/back.png';
    useEffect(() => {
        api.post('/advance-analytics')
            .then(({ data }) => {
                setCardData([
                    {
                        value: data[0].avg_total_today.highest_wpm,
                        unit: 'WPM',
                        cardHead: 'Highest WPM',
                        more: false,
                    },
                    {
                        value: data[0].avg_total_today.highest_kpm,
                        unit: 'KPM',
                        cardHead: 'Highest KPM',
                        more: false,
                    },
                    {
                        value: data[0].avg_total_today.total_tests,
                        unit: 'Tests',
                        cardHead: 'Total Attempts',
                        more: false,
                    },
                ]);
                setSeriesData(data[1]);
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="analyticsContainer">
            <div className="analyticsHeader">
                <Navigation
                    menu={{
                        href: '/dashboard',
                        value: 'Dashboard',
                        icons: [
                            `https://img.icons8.com/ios-glyphs/30/eeeeee/back.png`,
                            `https://img.icons8.com/ios-glyphs/30/121212/back.png`,
                            'https://img.icons8.com/ios-glyphs/30/fefeff/back.png',
                            'https://img.icons8.com/ios-glyphs/30/101010/back.png',
                        ],
                    }}
                    sideNavOpen={true}
                />
                <div style={{ display: 'flex' }}>
                    <Hyperlink value={'Filter'} type="trans-hover" />
                    <ToggleDarkLight />
                </div>
            </div>
            <div className="candidateDetails">
                <h1 className="sectionHead" style={{ float: !responsive ? 'left' : 'none' }}>
                    Advance Analytics
                </h1>
                <div style={{ float: !responsive ? 'right' : 'none', textAlign: !responsive ? 'right' : 'left' }}>
                    <h2 className="highlight">{userDetails.user.name}</h2>
                    <p>Joined on {format(new Date(userDetails.user.created_at), 'MMM d, yyyy')}</p>
                </div>
            </div>
            <div className="reportContainer">
                <div className="item1">
                    <AccuracyWpmChart width={'95%'} />
                </div>
                {cardData.map((ele, index) => (
                    <div key={index} className={`item${index + 2}`}>
                        <Card val={ele} />
                    </div>
                ))}
                <div className="item5">
                    <HeatMapChart seriesData={seriesData} />
                </div>
            </div>
        </div>
    );
};

export default AdvanceAnalytics;
