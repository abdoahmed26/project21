import React from 'react';
import MyResponsiveBar from './Data';

const Bar = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='text-2xl text-blue-500 font-bold'>Bar Chart</h1>
                    <p className='font-medium'>The minimum wage in Germany, France and Spain (EUR/month)</p>
                </div>
            </div>
            <div className='mt-6 overflow-auto'>
                <div className="w-[530px] sm:w-full">
                    <MyResponsiveBar/>
                </div>
            </div>
        </div>
    );
}

export default Bar;