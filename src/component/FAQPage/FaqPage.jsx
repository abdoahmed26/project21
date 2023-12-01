import React from 'react';
import ACcordion from './Accordion';

const FaqPage = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='uppercase text-2xl text-blue-500 font-bold'>faq</h1>
                    <p className='font-medium'>Frequently Asked Questions Page</p>
                </div>
            </div>
            <div className='mt-6'>
                <ACcordion/>
            </div>
        </div>
    );
}

export default FaqPage;