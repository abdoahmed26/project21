import {IconButton, Paper } from '@mui/material';
import React from 'react';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import MyResponsiveLine from './myData/Data5';

const Part2 = () => {
    return (
        <div className='mt-3'>
            <div className='flex flex-col xl:flex-row gap-3'>
                <Paper className='xl:w-[68%] overflow-auto'>
                    <Paper className='p-3 px-4 w-[700px] md:w-full'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className='text-firstColor font-bold text-xl'>Revenue Generated</h2>
                                <span className='text-sm font-medium'>$59,342.32</span>
                            </div>
                            <IconButton>
                                <DownloadOutlinedIcon/>
                            </IconButton>
                        </div>
                        <div>
                            <MyResponsiveLine/>
                        </div>
                    </Paper>
                </Paper>
                <div className='xl:w-[32%] flex flex-col gap-2 h-[370px] overflow-auto'>
                    <Paper className='p-3'>
                        <h2 className='text-firstColor font-bold text-xl'>Revenue Transactions</h2>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>01e4dsaewf</h2>
                                <span className='text-sm'>johndoe</span>
                            </div>
                            <div>
                                <h2>2021-09-01</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$43.91</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>0315dsaaef</h2>
                                <span className='text-sm'>jackdower</span>
                            </div>
                            <div>
                                <h2>2022-04-01</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$133.45</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>01e4dsaef</h2>
                                <span className='text-sm'>aberdohnny</span>
                            </div>
                            <div>
                                <h2>2021-09-01</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$43.95</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>51034szvfew</h2>
                                <span className='text-sm'>goodmanave</span>
                            </div>
                            <div>
                                <h2>2022-11-05</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$200.95</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>0a123sb</h2>
                                <span className='text-sm'>stevebower</span>
                            </div>
                            <div>
                                <h2>2022-11-02</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$13.55</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>01e4dsa</h2>
                                <span className='text-sm'>aberdohnny</span>
                            </div>
                            <div>
                                <h2>2021-09-01</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$43.95</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>120s51a</h2>
                                <span className='text-sm'>wootzifer</span>
                            </div>
                            <div>
                                <h2>2019-04-15</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$24.20</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className='p-3 py-2'>
                        <div className='font-medium flex justify-between items-center flex-wrap gap-2'>
                            <div>
                                <h2>0315dsaa</h2>
                                <span className='text-sm'>jackdower</span>
                            </div>
                            <div>
                                <h2>2022-04-01</h2>
                            </div>
                            <div>
                                <span className='bg-red-600 text-white px-2 py-2 text-sm rounded'>$133.49</span>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    );
}

export default Part2;