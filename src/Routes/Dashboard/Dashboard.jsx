import Card from '../../Components/Card/Card';
import TotalCard from '../../Components/Card/TotalCard/TotalCard';
import './Dashboard.css'

const totalData={
    value:"1147",
    unit:"WPM",
    todayCount:"2"
}
const data = [{
    value:"33.7",
    unit:"WPM",
    cardHead:"Average",
    more:true,
    increment:false
},{
    value:"31",
    unit:"WPM",
    cardHead:"Last Attempt",
    more:true,
    increment:true
}]
const Dashboard=()=>{
    return(
    <>
        <p className="sectionHead">DASHBOARD</p>
        <div className="dashboardContent">
            {data.map((item,index)=>
                <Card key={index} val={item}/>
            )}
            <TotalCard val={totalData}/>
            <div className="box" style={{width:"60.5%",height:"25em"}}></div>
            <div className="box" style={{width:"30%",height:"25em"}}></div>
        </div>
    </>
    )
}

export default Dashboard;