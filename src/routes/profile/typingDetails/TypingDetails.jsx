import { useContext } from 'react';
import './TypingDetails.css';
import { Context } from '../../../ContextAPI';

const TypingDetails = ({ data }) => {
    const { responsive } = useContext(Context);
    return (
        <div className="typingDetailsTable">
            <h2>Test Details (AVG)</h2>
            <table>
                <thead>
                    <tr className="highlight">
                        <td></td>
                        <td>WPM</td>
                        <td>KPM</td>
                        <td>{responsive ? 'ACC' : 'ACCURACY'}</td>
                        <td>Tests</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="highlight">{item.language}</td>
                            <td>{item.avg_wpm}</td>
                            <td>{item.avg_kpm}</td>
                            <td>{item.avg_accuracy}</td>
                            <td>{item.total_tests}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TypingDetails;
