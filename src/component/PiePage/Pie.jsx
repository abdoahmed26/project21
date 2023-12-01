import React from 'react';
import Data from './Data';

const Pie = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='text-2xl text-blue-500 font-bold'>Pie Chart</h1>
                    <p className='font-medium'>Simple Pie Chart</p>
                </div>
            </div>
            <div className='mt-12 overflow-auto'>
                <div className="">
                    <Data/>
                </div>
            </div>
        </div>
    );
}

export default Pie;