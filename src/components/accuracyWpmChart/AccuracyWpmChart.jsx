import { useContext, useEffect, useState } from 'react';
import './AccuracyWpmChart.css'
import { Context } from '../../ContextAPI';
import Loading from '../loading/Loading';
import Chart from 'react-apexcharts'
import api from '../../api';
import CardContainer from '../cardContainer/CardContainer';
import Hyperlink from '../hyperlink/Hyperlink';

 
const AccuracyWpmChart=()=>{
    let darkThemeColor = import.meta.env.VITE_APP_DARK_THEME||'#00aaff'
    let lightThemeColor= import.meta.env.VITE_APP_LIGHT_THEME||'#5500ff'
    const {responsive,lightMode} = useContext(Context)
    const [retry,setRetry] = useState(false)
    const testDays = [7,30,180,365]
    const [days,setDays] = useState(0)
    const [loading,setLoading] = useState(false)
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
          colors:[darkThemeColor,lightThemeColor],//used to set the color of the line
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
    useEffect(()=>{
        setLoading(true)
        api.post('/advance-analytics',{
          days:testDays[days]
      })
        .then(({data})=>{
          console.log(data);
          
            const updatedData = generateData(data,new Date(),testDays[days])//replace with 0 if not available that date
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
                chart:{
                  background: 'transparent', // Set the chart background to transparent
                  toolbar: {
                      show: false, // Disable toolbar (removes zoom icons)
                  },
                  zoom:{
                    enabled:true,
                    type:'x',
                    autoScaleYaxis: true,
                  },
                },
                xaxis: {
                    categories: daysOfWeek.reverse(), // Ensure categories are reversed
                    labels: {
                        show: false, // This hides the labels on the X-axis
                    },
                    tooltip: {
                        enabled: false, // Disable default tooltip for X-axis itself
                    },
                },
                tooltip: {
                    shared: true, // Allow shared tooltip for multiple series
                    x: {
                      formatter: function (value, { dataPointIndex }) {
                          // Use the reversed array to show the correct date in tooltip
                          const reversedData = updatedData.slice().reverse(); // Create a reversed copy
                          return reversedData[dataPointIndex]?.date || "Date not available";
                      },
                  },
                },
                theme: {
                    mode: !lightMode ? "light" : "dark", // Dynamic theme
                },
              }
            })
            setLoading(false)
  
        }).catch(({response})=>{
          console.log(response)
          setLoading(false)
          setRetry(true)
        })
      },[days])
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

    return(
        <div className="chartContainer" style={{width:responsive?"98%":"40%"}}>
            <CardContainer style={{justifyContent:!responsive?'center':'left'}}>
                {testDays.map((item,index)=>
                    <Hyperlink key={index} type={index==days?'themed':'bordered-theme'} value={item+'D'} onClick={()=>setDays(index)}/>
                )}
            </CardContainer>
            {!loading?<Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={'100%'} // Customize the chart height
            />:<Loading type='circle'/>}
        </div>
    )
}

export default AccuracyWpmChart;