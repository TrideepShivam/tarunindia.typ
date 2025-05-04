import { formatDistanceToNow } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import api from '../../../api';
import Hyperlink from '../../../components/hyperlink/Hyperlink';
import Loading from '../../../components/loading/Loading';
import { Context } from '../../../ContextAPI';

import './PendingTests.css';

const PendingTests = () => {
    const [loading, setLoading] = useState(false);
    const [pendingData, setPendingData] = useState();
    const { setMsg } = useContext(Context);
    useEffect(() => {
        fetchPendingTests();
    }, []);
    const fetchPendingTests = () => {
        setLoading(true);
        api.get('/pending-tests')
            .then(({ data }) => {
                setLoading(false);
                setPendingData(data);
            })
            .catch(({ response }) => {
                setLoading(false);
                console.log(response);
            });
    };
    const deletePendingTest = (encryptedId) => {
        api.get(`/remove-pendings/${encryptedId}`)
            .then(({ data }) => {
                setMsg({
                    isOpen: true,
                    status: data.state,
                    message: data.message,
                });
                fetchPendingTests();
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    if (loading) return <Loading type="rounded" />;
    return !pendingData || pendingData.length == 0 ? (
        <p>No pending tests available</p>
    ) : (
        <table className="pendingDataTable">
            <thead>
                <tr className="highlight">
                    <td>TIME</td>
                    <td>LANGUAGE</td>
                    <td>DURATION</td>
                    <td>LEFT</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {pendingData
                    .slice(0)
                    .reverse()
                    .map((item, index) => (
                        <tr key={index}>
                            <td>{formatDistanceToNow(item.created_at, { addSuffix: true })}</td>
                            <td>{item.stories.language}</td>
                            <td>{item.duration} min</td>
                            <td>{item.duration - item.done_duration} min</td>
                            <td style={{ textAlign: 'right', color: 'var(--theme-color)' }}>
                                <Hyperlink type="bordered-theme" value="Play" href={'/play/' + item.encrypted_id} />
                                <Hyperlink
                                    style={{ marginLeft: '.5em' }}
                                    value="Del"
                                    onClick={() => deletePendingTest(item.encrypted_id)}
                                />
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default PendingTests;
