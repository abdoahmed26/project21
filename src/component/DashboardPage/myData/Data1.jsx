import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Box } from '@mui/material';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['javascript','sass'],
            datasets: [
                {
                    data: [40,60],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--red-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };
        setChartData(data);
        setChartOptions(options);
    }, []);
    return (
        <Box className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full h-[100px]" />
        </Box>
    )
}