import React from 'react';
import MyResponsiveLine from './Data';

const Line = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='text-2xl text-blue-500 font-bold'>Line Chart</h1>
                    <p className='font-medium'>Simple Line Chart</p>
                </div>
            </div>
            <div className='mt-6 overflow-auto'>
                <div className="w-[700px] sm:w-full">
                    <MyResponsiveLine/>
                </div>
            </div>
        </div>
    );
}

export default Line;