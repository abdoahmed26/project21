import React from 'react';
import Form from './Form';

const Profile = () => {
    return (
        <div className='py-5 px-6'>
            <div className="title">
                <div>
                    <h1 className='uppercase text-2xl text-blue-500 font-bold'>CREATE USER</h1>
                    <p className='font-medium'>Create a New User Profile</p>
                </div>
            </div>
            <div className='mt-6'>
                <Form/>
            </div>
        </div>
    );
}

export default Profile;