import { useRef } from 'react';
import './Textbox.css';
import { useState } from 'react';

const Textbox = (props) => {
    const [legend, setLegend] = useState(props.legendStyle ? props.legendStyle : false);
    const blurStyle = {
        top: '0em',
        fontSize: '1.5em',
        color: 'var(--text-color-light)',
    };
    const focusStyle = {
        top: '-1em',
        fontSize: '1em',
        color: 'var(--theme-color)',
    };
    let data = props.var ? props.var : useRef();
    const focusText = () => {
        setLegend(true);
    };
    const blurText = () => {
        setLegend(data.current.value ? true : false);
    };
    const today = new Date().toISOString().split('T')[0];
    return (
        <div className="textboxContainer">
            <input
                autoFocus={props.autofocus && props.autofocus}
                style={props.style && props.style}
                defaultValue={props.type == 'date' ? today : ''}
                max={props.max ? props.max : today}
                type={props.type}
                ref={data}
                onFocus={focusText}
                onBlur={blurText}
                onChange={props.onChange && props.onChange}
            />
            <p style={legend ? focusStyle : blurStyle}>{props.legend}</p>
        </div>
    );
};

export default Textbox;
