import React from 'react';
import DataTable from './DataTable';

const Team = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='uppercase text-2xl text-blue-500 font-bold'>TEAM</h1>
                    <p className='font-medium'>Managing the Team Members</p>
                </div>
            </div>
            <div className='mt-6'>
                <DataTable/>
            </div>
        </div>
    );
}

export default Team;