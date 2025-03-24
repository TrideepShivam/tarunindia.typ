import { useContext, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import './Results.css';
import ResultDetail from '../../components/resultDetail/ResultDetail';
import Button from '../../components/button/Button';
import api from '../../api';
import Loading from '../../components/loading/Loading';
import CircleButton from '../../components/circleButton/CircleButton';
import { Context } from '../../ContextAPI';
import Search from '../../components/search/Search';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import { formatDistanceToNow } from 'date-fns';
import Retry from '../../components/retry/Retry';
import CardContainer from '../../components/cardContainer/CardContainer';

const Results = () => {
    useAuthInterceptor();
    const { lightMode, setMsg, responsive } = useContext(Context);
    const img = (
        <img
            width="25"
            height="25"
            src={
                !lightMode
                    ? 'https://img.icons8.com/ios-filled/25/000000/search.png'
                    : 'https://img.icons8.com/ios-filled/25/ffffff/search.png'
            }
            alt="back"
        />
    );
    const imgrefresh = (
        <img
            width="25"
            height="25"
            src={
                !lightMode
                    ? 'https://img.icons8.com/ios-filled/25/000000/refresh.png'
                    : 'https://img.icons8.com/ios-filled/25/ffffff/refresh.png'
            }
            alt="back"
        />
    );

    const cardData = [
        {
            id: 0,
            value: '31',
            unit: 'WPM',
            cardHead: 'Average WPM',
            more: false,
            increment: true,
        },
        {
            id: 1,
            value: '94.3',
            unit: '%',
            cardHead: 'Average Accuracy',
            more: false,
            increment: true,
        },
        {
            id: 2,
            value: '343',
            unit: 'KPM',
            cardHead: 'Average KPM',
            more: false,
            increment: true,
        },
    ];
    const [cards, setCards] = useState(cardData);
    //used to concatinate all new avg value and store it into cards state in a one go
    const updateCardValues = (newWPM, newAccuracy, newKPM) => {
        const updatedCards = cards.map((card) => {
            switch (card.id) {
                case 0:
                    return { ...card, value: newWPM.toString() };
                case 1:
                    return { ...card, value: newAccuracy.toString() };
                case 2:
                    return { ...card, value: newKPM.toString() };
                default:
                    return card;
            }
        });
        setCards(updatedCards);
    };
    const [refresh, setRefresh] = useState(false);
    const [testDetail, setTestDetail] = useState();
    const [loading, setLoading] = useState(true);
    const [retry, setRetry] = useState(false);
    const [details, setDetails] = useState({
        open: false,
        data: '',
    });
    const [search, setSearch] = useState(false);
    useEffect(() => {
        api.get('/get-attempts')
            .then(({ data }) => {
                setRefresh(false);
                setTestDetail(data);
                //used checking ternary to set data if no data is responsed from server
                const averageWPM =
                    data.length > 0
                        ? (data.reduce((sum, user) => sum + user.test_details.wpm, 0) / data.length).toFixed(2)
                        : 0;
                const averageAccuracy =
                    data.length > 0
                        ? (data.reduce((sum, user) => sum + user.test_details.accuracy, 0) / data.length).toFixed(2)
                        : 0;
                const averageKPM =
                    data.length > 0
                        ? (data.reduce((sum, user) => sum + user.test_details.kpm, 0) / data.length).toFixed(2)
                        : 0;
                //call fn with 3 values
                updateCardValues(averageWPM, averageAccuracy, averageKPM);
                setLoading(false);
            })
            .catch((response) => {
                setMsg({
                    isOpen: true,
                    status: 'Error',
                    message: response.message,
                });
                setLoading(false);
                setRetry(true);
            });
    }, [refresh, retry]);
    if (loading) {
        return <Loading />;
    } else if (retry) {
        return <Retry retry={() => setRetry(false)} to="/results" />;
    }
    return (
        <>
            {search && <Search setTestDetail={setTestDetail} onClick={() => setSearch(false)} />}
            {details.open && <ResultDetail details={details} setDetails={setDetails} />}
            <p className="sectionHead">RESULTS</p>
            <div className="resultContent">
                <CardContainer>
                    {cards.map((item, index) => (
                        <Card key={index} val={item} />
                    ))}
                </CardContainer>
                <div className="resultTableContainer">
                    <table>
                        <thead>
                            <tr className="highlight">
                                <td>TIME</td>
                                <td>WPM</td>
                                {!responsive && (
                                    <>
                                        <td>ACCURACY (%)</td>
                                        <td>LANGUAGE</td>
                                        <td>ERRORS</td>
                                        <td>DURATION</td>
                                    </>
                                )}
                                <td style={{ position: 'relative' }}>
                                    <CircleButton
                                        style={{ top: '-.3em', right: '3em' }}
                                        value={imgrefresh}
                                        onClick={() => {
                                            setRefresh(true);
                                            setLoading(true);
                                        }}
                                    />
                                    <CircleButton
                                        style={{ top: '-.3em', right: '-.1em' }}
                                        value={img}
                                        onClick={() => setSearch(true)}
                                    />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {testDetail && testDetail.length ? (
                                testDetail
                                    .slice(0)
                                    .reverse()
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{formatDistanceToNow(item.created_at, { addSuffix: true })}</td>
                                            <td>{item.test_details.wpm}</td>
                                            {!responsive && (
                                                <>
                                                    <td>{item.test_details.accuracy}</td>
                                                    <td>{item.stories.language}</td>
                                                    <td>{item.test_details.errors}</td>
                                                    <td>{item.duration} min</td>
                                                </>
                                            )}
                                            <td>
                                                <Button
                                                    transparancy={true}
                                                    onClick={() =>
                                                        setDetails({
                                                            ...details,
                                                            open: true,
                                                            data: item,
                                                        })
                                                    }
                                                    value="details"
                                                />
                                            </td>
                                        </tr>
                                    ))
                            ) : (
                                <tr>
                                    <td style={{ padding: '5em', textAlign: 'center' }} colSpan={7}>
                                        No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Results;
