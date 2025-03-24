import './CircleButton.css';
//if want to use this button then pass img,onClick,action,style
//img for icon, onClick for open close component, action to pass the data to the parent component and style to set position
function CircleButton(props) {
    return (
        <button
            style={props.style ? props.style : { top: '1em', right: '1em' }}
            className="circleButton"
            onClick={
                props.action
                    ? () =>
                          props.action({
                              ...props.details,
                              open: false,
                          })
                    : () => props.onClick()
            }
        >
            {props.value ? props.value : 'x'}
        </button>
    );
}

export default CircleButton;
