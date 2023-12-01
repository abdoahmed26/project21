import React from 'react';
import Data from './Data';

const Geog = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='text-2xl text-blue-500 font-bold'>Geography</h1>
                    <p className='font-medium'>Simple Geography Chart</p>
                </div>
            </div>
            <div className='mt-10 overflow-auto'>
                <div className="">
                    <Data/>
                </div>
            </div>
        </div>
    );
}

export default Geog;