import { useRef, useState, useEffect } from 'react';
import './Textarea.css';

const Textarea = (props) => {
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
    useEffect(() => {
        if (props.value) {
            setLegend(true);
        }
    }, [props.value]);

    return (
        <div className="textareaContainer">
            <textarea
                autoFocus={props.autofocus && props.autofocus}
                style={props.style && props.style}
                ref={data}
                rows={props.rows || 4}
                onFocus={focusText}
                onBlur={blurText}
                onChange={props.onChange && props.onChange}
                maxLength={props.maxLength}
                placeholder={props.placeholder || ''}
                disabled={props.disabled}
                value={props?.value}
            />
            <p style={legend ? focusStyle : blurStyle}>{props.legend}</p>
        </div>
    );
};

export default Textarea;
