import './BlurImgDiv.css';

const BlurImgDiv = (props) => {
    return (
        <div
            className="blurContainer"
            style={Object.assign({ backgroundImage: `url(${props.image})` }, props.style && props.style)}
        >
            <div className="blur" style={props.adjust && props.adjust}>
                {props.children}
            </div>
        </div>
    );
};
export default BlurImgDiv;
