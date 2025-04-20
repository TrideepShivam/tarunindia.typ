import { useContext, useEffect, useState } from 'react';
import HeatMapChart from '../../components/heatMapChart/HeatMapChart';
import ToggleDarkLight from '../../components/toggleDarkLight/ToggleDarkLight';
import { Context } from '../../ContextAPI';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import { format } from 'date-fns';
import AccuracyWpmChart from '../../components/accuracyWpmChart/AccuracyWpmChart';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import api from '../../api';
import Card from '../../components/card/Card';
import Loading from '../../components/loading/Loading';
import Navigation from '../../components/navigation/sideNavigation/navigation/Navigation';
import Tags from '../../components/tags/Tags';
import Filter from '../../components/filter/Filter';
import { Navigate } from 'react-router-dom';
import './AdvanceAnalytics.css';

const AdvanceAnalytics = () => {
    useAuthInterceptor();
    const [loading, setLoading] = useState(true);
    const { userDetails, responsive } = useContext(Context);
    const [cardData, setCardData] = useState([]);
    const [seriesData, setSeriesData] = useState([]);
    const [openFilter, setOpenFilter] = useState(false);
    const [languageFilter, setLanguageFilter] = useState();
    const [durationFilter, setDurationFilter] = useState();
    useEffect(() => {
        setLoading(true);
        api.post('/advance-analytics', {
            duration: durationFilter,
            language: languageFilter,
        })
            .then(({ data }) => {
                setCardData([
                    {
                        value: data[0].avg_total_today.avg_wpm,
                        unit: 'WPM',
                        cardHead: 'Average WPM',
                        more: false,
                    },
                    {
                        value: data[0].avg_total_today.avg_kpm,
                        unit: 'KPM',
                        cardHead: 'Average KPM',
                        more: false,
                    },
                    {
                        value: data[0].avg_total_today.avg_accuracy,
                        unit: '%',
                        cardHead: 'Average Accuracy',
                        more: false,
                    },
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
            .catch(() => {
                setLoading(false);
            });
    }, [durationFilter, languageFilter]);

    if (loading) {
        return <Loading />;
    }
    if (!userDetails) {
        return <Navigate to={'/login'} />;
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '.2em' }}>
                    {openFilter && (
                        <Filter
                            setOpenFilter={setOpenFilter}
                            data={{
                                language: languageFilter,
                                duration: durationFilter,
                            }}
                            setLanguageFilter={setLanguageFilter}
                            setDurationFilter={setDurationFilter}
                        />
                    )}
                    {languageFilter && <Tags onClick={() => setLanguageFilter()} value={languageFilter} />}
                    {durationFilter && <Tags onClick={() => setDurationFilter()} value={durationFilter + ' min'} />}
                    <Hyperlink onClick={() => setOpenFilter(!openFilter)} value={'Filter'} type="bordered-theme" />
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
                    <AccuracyWpmChart width={'95%'} language={languageFilter} duration={durationFilter} />
                </div>
                {cardData.map((ele, index) => (
                    <div key={index} className={`item${index + 2}`}>
                        <Card val={ele} />
                    </div>
                ))}
                <div className="item8">
                    <HeatMapChart seriesData={seriesData} />
                </div>
            </div>
        </div>
    );
};

export default AdvanceAnalytics;
