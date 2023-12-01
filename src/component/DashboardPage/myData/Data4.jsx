import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Box } from '@mui/material';

export default function DoughnutChartDemo4() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['javascript','sass'],
            datasets: [
                {
                    data: [77,33],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-700'), 
                        documentStyle.getPropertyValue('--orange-600'), 
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--green-600'), 
                        documentStyle.getPropertyValue('--orange-500'), 
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