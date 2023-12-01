import { Paper } from '@mui/material';
import React from 'react';
import DoughnutChartDemo6 from './myData/Data6';
import MyResponsiveBar from './myData/Data7';

const Part3 = () => {
    return (
        <div className='mt-3'>
            <div className='grid xl:grid-cols-2 gap-3'>
                <div className='w-full'>
                    <Paper className='p-3 px-4'>
                        <h2 className='text-firstColor font-bold text-xl'>Campaign</h2>
                        <div className='w-fit mx-auto'>
                            <DoughnutChartDemo6/>
                        </div>
                        <div className='text-center font-medium mt-1'>
                            <h2 className='text-xl'>$48,352 revenue generated</h2>
                            <p className='text-sm'>Includes extra misc expenditures and costs</p>
                        </div>
                    </Paper>
                </div>
                <Paper className='w-full overflow-auto'>
                    <div className='p-3 px-4 w-[520px] sm:w-full'>
                        <h2 className='text-firstColor font-bold text-xl'>Sales Quantity</h2>
                        <div className=''>
                            <MyResponsiveBar/>
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default Part3;