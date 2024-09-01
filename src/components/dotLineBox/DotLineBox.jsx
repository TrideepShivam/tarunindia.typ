import "./DotLineBox.css"

const DotLineBox = (props) => {
    return (
        <div className="dotBox" style={props.dot=="left"?{borderLeftWidth:2+"px"}:{borderRightWidth:2+"px",flexDirection:"row-reverse"}}>
            <div className="workexplain">
                <h2></h2>
                <p></p>
            </div>
            <img src={props.image}/>
        </div>
    )
}
export default DotLineBox;