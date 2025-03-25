import './MainFormContainer.css';

const MainFormContainer = (props) => {
    return (
        <div
            className="mainFormContainer"
            style={{
                background: `linear-gradient(0deg, var(--transparent-color), var(--transparent-color)), url(${props.img})`,
                backgroundSize: '50em',
            }}
        >
            <div className="formDetails">
                <h1 className="highlight">{props.heading}</h1>
                <p>{props.subheading}</p>
                <p className="highlight">typathon.com</p>
            </div>
            <div className="formContents">{props.children}</div>
        </div>
    );
};

export default MainFormContainer;
