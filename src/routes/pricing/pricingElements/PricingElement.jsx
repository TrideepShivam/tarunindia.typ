import { useContext, useEffect, useState } from 'react';
import api from '../../../api';
import Button from '../../../components/button/Button';
import CardContainer from '../../../components/cardContainer/CardContainer';
import Hyperlink from '../../../components/hyperlink/Hyperlink';
import Loading from '../../../components/loading/Loading';
import { Context } from '../../../ContextAPI';

import './PricingElement.css';

const PricingElement = () => {
    const { setMsg, responsive } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const pricingDays = [365, 180, 90, 30, 15];
    const [day, setDay] = useState(pricingDays[0]);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        api.post(`/plan/day/${day}`)
            .then(({ data }) => {
                setData(data);
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
                setMsg({
                    isOpen: true,
                    status: response.data ? response.data.state : 'Error',
                    message: response.data ? response.data.message : 'Server Error. Try again',
                });
            });
    }, [day]);

    return (
        <div className="pricingElementContainer">
            <CardContainer style={{ justifyContent: !responsive ? 'center' : 'left' }}>
                {pricingDays.map((item, index) => (
                    <Hyperlink
                        key={index}
                        type={item == day ? 'themed' : 'trans-hover'}
                        value={item + 'D'}
                        onClick={() => setDay(item)}
                    />
                ))}
            </CardContainer>
            {!loading ? (
                <div className="priceCardContainer">
                    {data.map((item, index) => (
                        <div key={index} className={index == data.length - 1 ? 'planCard exclusive' : 'planCard'}>
                            <h2>{item.language}</h2>
                            <h1 className="highlight">₹{item.price}</h1>
                            <h3>{item.duration} Days</h3>
                            <p>
                                <span className="highlight">₹{parseFloat((item.price / day).toFixed(2))}</span>/day
                            </p>
                            <p>{index == data.length - 1 ? 'Unlimited' : item.language} access</p>
                            <p>{index == data.length - 1 ? 'Free' : 'Paid'} Event Tickets</p>
                            <p>24/7 support</p>
                            <Button
                                style={{ width: '10em' }}
                                value={'Buy Now'}
                                onClick={() =>
                                    (window.location.href =
                                        'https://wa.me/9546747447?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21')
                                }
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default PricingElement;
