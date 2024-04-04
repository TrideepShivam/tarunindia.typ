import './Dashboard.css'
 
const Dashboard=()=>{
    return(
    <>
        <p className="sectionHead">DASHBOARD</p>
        <div className="dashboardContent">
            <div className="box" style={{width:"30%",height:"15em"}}></div>
            <div className="box" style={{width:"30%",height:"15em"}}></div>
            <div className="box" style={{width:"30%",height:"15em"}}></div>
            <div className="box" style={{width:"60.5%",height:"25em"}}></div>
            <div className="box" style={{width:"30%",height:"25em"}}></div>
        </div>
    </>
    )
}

export default Dashboard;