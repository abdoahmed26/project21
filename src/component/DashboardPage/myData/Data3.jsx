import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Box } from '@mui/material';

export default function DoughnutChartDemo3() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['javascript','sass'],
            datasets: [
                {
                    data: [44,66],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-400'), 
                        documentStyle.getPropertyValue('--blue-500'), 
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--green-300'), 
                        documentStyle.getPropertyValue('--blue-400'), 
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