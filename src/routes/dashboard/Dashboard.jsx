import Card from '../../components/card/Card';
import TotalCard from '../../components/card/totalCard/TotalCard';
import Chart from 'react-apexcharts'
import './Dashboard.css'
import { useContext, useEffect, useState } from 'react';
import {Context} from '../../ContextAPI';

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
    const {lightMode} = useContext(Context)
    const [chartData, setChartData] = useState({
        series: [{
            name: "Speed",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },{
            name: "Accuracy",
            data: [11, 21, 15, 31, 29, 22, 79, 91, 48]
        }],
        options: {
          chart: {
            type: 'line',//used to decide the type of the chart
            zoom: {
              enabled: false//used for zoom icons
            },
            background:'transparent'
          },
          colors:["#00ff85","#5000ff"],//used to set the color of the line
          dataLabels: {
            enabled: false//used if you want labels on the line
          },
          stroke: {
            curve: 'straight',
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          },
          theme:{
            mode:!lightMode?'light':'dark'
          }
        },      
      })
    useEffect(()=>{
        setChartData((prevChartData) => ({
            ...prevChartData,
            options: {
              ...prevChartData.options,
              theme: {
                mode: !lightMode ? "light" : "dark",
              },
            },
        }));
    },[lightMode])
    return(
    <>
        <p className="sectionHead">DASHBOARD</p>
        <div className="dashboardContent">
            {data.map((item,index)=>
                <Card key={index} val={item} />
            )}
            <TotalCard val={totalData} />
            <div className="chartContainer" style={{width:"40%"}}>
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height={350} // Customize the chart height
                />
            </div>
            <div className="eventContainer" style={{width:"51%"}}>
              Events are comming soon
            </div>
        </div>
    </>
    )
}

export default Dashboard;