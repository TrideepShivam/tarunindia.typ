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

const AdvanceAnalytics = () => {
    useAuthInterceptor();
    const { userDetails } = useContext(Context);
    const [cardData, setCardData] = useState([]);
    const [seriesData, setSeriesData] = useState([]);
    useEffect(() => {
        api.get('/advance-analytics')
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
            })
            .catch(({ response }) => {});
    }, []);
    return (
        <div className="analyticsContainer">
            <div className="analyticsHeader">
                <Hyperlink href="/dashboard" value="dashboard" type="bordered-theme" />
                <div style={{ display: 'flex' }}>
                    <Hyperlink value={'Filter'} type="trans-hover" />
                    <ToggleDarkLight />
                </div>
            </div>
            <div className="candidateDetails">
                <h1 className="highlight">{userDetails.user.name}</h1>
                <h3>Advance Analytics</h3>
                <p>Joined on {format(new Date(userDetails.user.created_at), 'MMM d, yyyy')}</p>
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
