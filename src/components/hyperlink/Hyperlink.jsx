import { Link } from 'react-router-dom';

import './Hyperlink.css';

const Hyperlink = (props) => {
    // const typeCollection = ['trans-hover', 'bordered-theme', 'anchor', 'themed', 'premium'];
    return (
        <Link
            style={props.style && props.style}
            className={!props.type ? 'anchor' : props.type}
            to={props.href && props.href}
            onClick={props.onClick ? props.onClick : ''}
            target={props.target && props.target}
        >
            {props.value}
        </Link>
    );
};

export default Hyperlink;
