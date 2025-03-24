import { useContext, useRef } from 'react';
import './Dropdown.css';
import { useState } from 'react';
import { Context } from '../../ContextAPI';

const Dropdown = (props) => {
    const { lightMode } = useContext(Context);
    const [text, setText] = useState('');
    const [legend, setLegend] = useState(text ? true : false);
    const [options, setOptions] = useState(false);
    const arrow = !lightMode
        ? 'https://img.icons8.com/ios-filled/25/000000/back.png'
        : 'https://img.icons8.com/ios-filled/25/ffffff/back.png';
    const blurStyle = {
        top: '.3em',
        left: '.6em',
        fontSize: '1.5em',
        color: 'var(--text-color-light)',
        backgroundColor: 'transparent',
    };
    const focusStyle = {
        top: '-.8em',
        left: '.6em',
        fontSize: '1em',
        color: 'var(--theme-color)',
        zIndex: '1',
    };
    let data = props.var ? props.var : useRef();
    const focusText = () => {
        setLegend(true);
        setOptions(true);
        props.onClick && props.onClick();
    };
    const blurText = () => {
        setLegend(text != '' ? true : false);
        setOptions(false);
    };
    const handleValue = (val) => {
        setText(val);
        setOptions(false);
    };
    return (
        <div className="dropdownContainer">
            <input
                style={{ borderColor: legend && 'var(--theme-color)' }}
                ref={data}
                onFocus={focusText}
                onBlur={blurText}
                value={text}
                readOnly
            />
            <p className="legend" style={legend ? focusStyle : blurStyle}>
                {props.legend}
            </p>
            <img style={{ transform: options && 'rotate(-270deg)' }} src={arrow} />
            {options && (
                <div className="options">
                    {props.options.length > 0 ? (
                        props.options.map((item, index) => (
                            <p key={index} onMouseDown={() => handleValue(item)}>
                                {item}
                            </p>
                        ))
                    ) : (
                        <p>No Options</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
