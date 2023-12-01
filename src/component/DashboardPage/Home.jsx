import { Button } from '@mui/material';
import React from 'react';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';

const Home = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <h1 className='uppercase text-2xl text-blue-500 font-bold'>dashboard</h1>
                    <p className='font-medium'>Welcome to your dashboard</p>
                </div>
                <div>
                    <Button variant="contained" startIcon={<DownloadOutlinedIcon/>}>
                        <span className='capitalize'>Download Reports</span>
                    </Button>
                </div>
            </div>
            <div>
                <Part1/>
                <Part2/>
                <Part3/>
                <Part4/>
            </div>
        </div>
    );
}

export default Home;