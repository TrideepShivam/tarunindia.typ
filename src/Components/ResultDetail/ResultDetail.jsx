import Percentage from './Percentage/Percentage';
import './ResultDetail.css'

 
const ResultDetail=()=>{

    return(
    <div className="resultDetailContainer">
        <div className="resultDetail">
            <div className="details">
                <div>
                    <h3 className="sectionHead">Details</h3>
                </div>
                <Percentage value={70} text={'accuracy'}/>
            </div>
            <div className="errors">
                <h3 className="sectionHead">Errors</h3>
            </div>
        </div>
    </div>
    )
}

export default ResultDetail;