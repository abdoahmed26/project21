import { Paper } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import DoughnutChartDemo from './myData/Data1';
import DoughnutChartDemo2 from './myData/Data2';
import DoughnutChartDemo3 from './myData/Data3';
import DoughnutChartDemo4 from './myData/Data4';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';

const Part1 = () => {
    return (
        <div className='mt-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                <div>
                    <Paper className='py-3 px-3 flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <EmailIcon className='text-firstColor'/>
                            <span className='text-xs font-medium'>12,361</span>
                            <span className='text-xs font-medium'>Emails Sent</span>
                            <span className='text-xs font-medium'>+14%</span>
                        </div>
                        <div>
                            <div>
                                <DoughnutChartDemo/>
                            </div>
                        </div>
                    </Paper>
                </div>
                <div>
                    <Paper className='py-3 px-3 flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <PointOfSaleIcon className='text-firstColor'/>
                            <span className='text-xs font-medium'>431,225</span>
                            <span className='text-xs font-medium'>Sales obtained</span>
                            <span className='text-xs font-medium'>+21%</span>
                        </div>
                        <div>
                            <div>
                                <DoughnutChartDemo2/>
                            </div>
                        </div>
                    </Paper>
                </div>
                <div>
                    <Paper className='py-3 px-3 flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <PersonAddIcon className='text-firstColor'/>
                            <span className='text-xs font-medium'>32,441</span>
                            <span className='text-xs font-medium'>New Clients</span>
                            <span className='text-xs font-medium'>+5%</span>
                        </div>
                        <div>
                            <div>
                                <DoughnutChartDemo3/>
                            </div>
                        </div>
                    </Paper>
                </div>
                <div>
                    <Paper className='py-3 px-3 flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <TrafficIcon className='text-firstColor'/>
                            <span className='text-xs font-medium'>1,325,134</span>
                            <span className='text-xs font-medium'>Traffic Received</span>
                            <span className='text-xs font-medium'>+43%</span>
                        </div>
                        <div>
                            <div>
                                <DoughnutChartDemo4/>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    );
}

export default Part1;