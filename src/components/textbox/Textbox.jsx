import { useRef, useState, useEffect } from 'react';
import './Textbox.css';

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
    const internalRef = useRef();
    let data = props.var || internalRef;

    const focusText = () => {
        setLegend(true);
    };
    const blurText = () => {
        setLegend(data.current.value ? true : false);
    };
    const today = new Date().toISOString().split('T')[0];
    useEffect(() => {
        if (props.value) {
            setLegend(true);
        }
    }, [props.value]);
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
                disabled={props.disabled}
                value={props?.value}
            />
            <p style={legend ? focusStyle : blurStyle}>{props.legend}</p>
        </div>
    );
};

export default Textbox;
