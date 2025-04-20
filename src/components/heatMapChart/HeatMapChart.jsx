import { useContext } from 'react';
import Chart from 'react-apexcharts';
import { Context } from '../../ContextAPI';

const HeatMapChart = ({ seriesData }) => {
    const { lightMode } = useContext(Context);

    const options = {
        chart: {
            type: 'heatmap',
            background: 'transparent',
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                colorScale: {
                    //
                    ranges: [
                        { from: 0, to: 2, color: '#D1B3FF' },
                        { from: 3, to: 5, color: '#8C66FF' },
                        { from: 6, to: 8, color: '#5500FF' },
                        { from: 9, to: 12, color: '#4300CC' },
                        { from: 13, to: 20, color: '#300099' },
                    ],
                },
            },
        },
        dataLabels: {
            enabled: false, // Hides the data labels by default
        },
        tooltip: {
            enabled: true, // Show the tooltip when hovering
            theme: !lightMode ? 'light' : 'dark',
            y: {
                formatter: (value, { seriesIndex, dataPointIndex, w }) => {
                    const date = w.config.series[seriesIndex].data[dataPointIndex].meta; // Fetch the date from meta
                    return `${date}: ${value} Tests done`;
                },
            },
        },
        stroke: {
            width: 1, // Set border width
            colors: [!lightMode ? '#fff' : '#000'], // Dark border line color
        },
        xaxis: {
            title: {
                text: 'Daily test Counts', // X-axis title text
                style: {
                    color: lightMode ? '#fff' : '#000', // X-axis title color based on mode
                    fontSize: '14px', // Font size
                },
            },
            labels: {
                style: {
                    colors: lightMode ? '#fff' : '#000', // X-axis labels color based on mode
                    fontSize: '12px', // Font size for labels
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: lightMode ? '#fff' : '#000', // White axis labels
                },
            },
        },
    };

    return (
        <Chart
            options={options}
            series={seriesData} // Pass the heatmap data here
            type="heatmap"
            height={300}
            width={'100%'}
        />
    );
};

export default HeatMapChart;
