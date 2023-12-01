import React from 'react';
import DataInv from './DataInv';

const Invoices = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='uppercase text-2xl text-blue-500 font-bold'>INVOICES</h1>
                    <p className='font-medium'>List of Invoice Balances</p>
                </div>
            </div>
            <div className='mt-6'>
                <DataInv/>
            </div>
        </div>
    );
}

export default Invoices;