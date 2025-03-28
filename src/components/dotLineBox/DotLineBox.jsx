import './DotLineBox.css';
import { Context } from '../../ContextAPI';
import { useContext } from 'react';
const DotLineBox = (props) => {
    let res = window.innerWidth;
    const { lightMode } = useContext(Context);
    let currentImg = !lightMode ? props.image.light : props.image.dark;
    return (
        <div
            className="dotBox"
            style={
                props.dot == 'left'
                    ? { borderLeftWidth: 0.2 + 'em' }
                    : res > 800
                      ? { borderRightWidth: 0.2 + 'em', flexDirection: 'row-reverse' }
                      : { borderRightWidth: 0.2 + 'em' }
            }
        >
            <div className="workExplain">
                <h2>{props.head}</h2>
                <p style={props.dot == 'right' && res > 800 ? { textAlign: 'end' } : {}}>{props.short} </p>
            </div>
            <img src={currentImg} />
        </div>
    );
}; //borderRightWidth:.2+"em",flexDirection:"row-reverse"
export default DotLineBox;
