import './TypingDetails.css';

const TypingDetails = ({ data }) => {
    return (
        <div className="typingDetailsTable">
            <h2>Test Details</h2>
            <table>
                <thead>
                    <tr className="highlight">
                        <td></td>
                        <td>WPM (AVG)</td>
                        <td>KPM (AVG)</td>
                        <td>ACCURACY (AVG)</td>
                        <td>TOTAL TESTS</td>
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
