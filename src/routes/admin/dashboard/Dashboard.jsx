import { useContext, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Card from '../../../components/card/Card';
import TotalCard from '../../../components/card/totalCard/TotalCard';
import { Context } from '../../../ContextAPI';

import './Dashboard.css';

const totalData = {
    value: '1147',
    unit: 'WPM',
    todayCount: '2',
    cardHead: 'Total Users',
    queryQsn: 'Active Users',
};
const data = [
    {
        value: '2501',
        unit: '',
        cardHead: 'Currently Active',
        more: false,
        increment: false,
    },
    {
        value: '1001',
        unit: '',
        cardHead: 'Premium Users',
        more: false,
        increment: true,
    },
];

const Dashboard = () => {
    const { lightMode } = useContext(Context);
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Speed',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
            {
                name: 'Accuracy',
                data: [11, 21, 15, 31, 29, 22, 79, 91, 48],
            },
        ],
        options: {
            chart: {
                type: 'line', //used to decide the type of the chart
                zoom: {
                    enabled: false, //used for zoom icons
                },
                background: 'transparent',
            },
            colors: ['#00ff85', '#5000ff'], //used to set the color of the line
            dataLabels: {
                enabled: false, //used if you want labels on the line
            },
            stroke: {
                curve: 'straight',
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            theme: {
                mode: !lightMode ? 'light' : 'dark',
            },
        },
    });
    useEffect(() => {
        setChartData((prevChartData) => ({
            ...prevChartData,
            options: {
                ...prevChartData.options,
                theme: {
                    mode: !lightMode ? 'light' : 'dark',
                },
            },
        }));
    }, [lightMode]);
    return (
        <>
            <p className="sectionHead">DASHBOARD</p>
            <div className="dashboardContent">
                {data.map((item, index) => {
                    return <Card key={index} val={item} />;
                })}
                <TotalCard val={totalData} />
                <div className="chartContainer" style={{ width: '57%' }}>
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        height={350} // Customize the chart height
                    />
                </div>
                <div className="topUserBox">
                    <p className="sectionHead">Top User</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
