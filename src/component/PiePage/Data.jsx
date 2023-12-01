import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { Box } from '@mui/material';

const Data = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['stylus','sass','haskell','nue','React'],
            datasets: [
                {
                    data: [543,401,434,333,272],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--orange-500'), 
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--green-500'), 
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--red-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--orange-400'), 
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--green-400'), 
                    ],
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
        <Box className="card flex justify-content-center w-full">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="h-[250px] sm:h-[400px] mx-auto" />
        </Box>
    )
}

export default Data;