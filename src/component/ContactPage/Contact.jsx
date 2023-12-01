import React from 'react';
import DataCont from './DataCont';

const Contact = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='uppercase text-2xl text-blue-500 font-bold'>CONTACTS</h1>
                    <p className='font-medium'>List of Contacts for Future Reference</p>
                </div>
            </div>
            <div className='mt-6'>
                <DataCont/>
            </div>
        </div>
    );
}

export default Contact;