import Card from '../../components/card/Card';
import TotalCard from '../../components/card/totalCard/TotalCard';
import Chart from 'react-apexcharts'
import './Dashboard.css'
import { useContext, useEffect, useState } from 'react';
import {Context} from '../../ContextAPI';
import api from '../../api';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import Loading from '../../components/loading/Loading';
import Retry from '../../components/retry/Retry';
import CardContainer from '../../components/cardContainer/CardContainer';

const Dashboard=()=>{
    useAuthInterceptor()
    const [loading,setLoading] = useState(true)
    const [retry,setRetry] = useState(false)
    const {lightMode,responsive} = useContext(Context)
    const [wpm,setWpm] = useState([{
      value:"33.7",
      unit:"WPM",
      cardHead:"Average",
      more:false
  },{
      value:"31",
      unit:"WPM",
      cardHead:"Last Attempt",
      more:false
    }])
    
    const [totalData,setTotalData]=useState({
    value:"1147",
    unit:"WPM",
    todayCount:"2",
    cardHead:"Total Attempts",
    queryQsn:"Today Attempts:"
    })

    const [chartData, setChartData] = useState({
        series: [{
            name: "WPM",
            data: [30, 41, 35, 51, 49, 62, 69, 61, 48]
        },{
            name: "Accuracy",
            data: [81, 91, 95, 91, 99, 92, 99, 91, 98]
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
            text: 'Progress Report',
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

    const generateData = (existingData, startDate, days) => {
      const newData = [];
    
      for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() - i);
        const formattedDate = date.toISOString().split('T')[0];
        const existingEntry = existingData.find(item => item.date === formattedDate);
        
        if (existingEntry) {
          newData.push(existingEntry);
        } else {
          newData.push({ date: formattedDate, avg_wpm: 0, avg_accuracy: 0 });
        }
      }
      return newData;
    }
    useEffect(()=>{
      api.get('/dashboard')
      .then(({data})=>{
              setWpm([
                {
                  value: data.avg_total_today.avg_wpm,
                  unit: "WPM",
                  cardHead: "Average",
                  more: false
                },
                {
                  value: data.last_7_days.length>0?data.last_7_days[0].avg_wpm:0,
                  unit: "WPM",
                  cardHead: "Last Attempt",
                  more: false
                }
              ])
              setTotalData({
                value:data.avg_total_today.total_tests,
                unit:"WPM",
                todayCount:data.avg_total_today.today_tests,
                cardHead:"Total Attempts",
                queryQsn:"Today Attempts:"
              })
              const updatedData = generateData(data.last_7_days,new Date(),10)
              const daysOfWeek = updatedData.map(item => item.date).map(date => {
                const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                const day = new Date(date).getDay();
                return dayNames[day];
              })
              setChartData({
                series: [{
                  name: "WPM",
                  data: (updatedData.map(item => item.avg_wpm)).reverse() // New WPM data
                },{
                  name: "Accuracy",
                  data: (updatedData.map(item => item.avg_accuracy)).reverse() // New Accuracy data
                }],
                options: {
                  ...chartData.options,
                  xaxis: {
                    categories: daysOfWeek.reverse()
                  },
                  theme:{
                    mode:!lightMode?'light':'dark'
                  }
                }
              })
              setLoading(false)

      }).catch(({response})=>{
        console.log(response)
        setLoading(false)
        setRetry(true)
      })
    },[retry])

    if(loading){
      return <Loading/>
    }else if(retry){
      return <Retry retry={()=>setRetry(false)} to='/dashboard'/>
   }

    return(
    <>
        <p className="sectionHead">DASHBOARD</p>
        <div className="dashboardContent">
          <CardContainer>
              {wpm.map((item,index)=>
                  <Card key={index} val={item} />
              )}
              <TotalCard val={totalData} />
          </CardContainer>
            <div className="chartContainer" style={{width:responsive?"98%":"40%"}}>
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height={350} // Customize the chart height
                />
            </div>
            <div className="eventContainer" style={{width:responsive?"98%":"51%"}}>
              Events are comming soon
            </div>
        </div>
    </>
    )
}

export default Dashboard;