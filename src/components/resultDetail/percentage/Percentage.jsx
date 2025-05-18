import { useState, useEffect } from 'react';
import yay from './../../../assets/yay.gif';
import './Percentage.css';

const Percentage = (props) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        let currentValue = 0;
        const interval = setInterval(() => {
            if (currentValue >= props.value) {
                clearInterval(interval);
            } else {
                currentValue++;
                setAnimatedValue(currentValue);
            }
        }, 10); // Adjust speed of animation
    }, [props.value]);

    const percentageColor = props.value < 95 ? 'tomato' : 'var(--theme-color)';
    const percentageStyle = `conic-gradient(${percentageColor} ${animatedValue * 3.6}deg, var(--background-color) 0deg)`;

    return (
        <div className="percentageContainer">
            {props.value >= 95 && <img width="250em" className="congratulation" src={yay} alt="" />}
            <div className="outer" style={{ backgroundImage: percentageStyle }}>
                <div className="inner">
                    <p className="highlight">{props.text}</p>
                    {animatedValue}&nbsp;{props.label}
                </div>
            </div>
        </div>
    );
};

export default Percentage;
