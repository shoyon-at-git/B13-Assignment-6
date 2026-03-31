import React from 'react';
import user from "../../../assets/user.png";
import box from "../../../assets/package.png";
import rocket from "../../../assets/rocket.png";

const Steps = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-5xl mb-4 font-extrabold'>Get Started In 3 Steps</h1>
            <p className='text-gray-500 text-sm mb-10'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                <div className='relative flex flex-col justify-center items-center space-y-2 px-6 py-22 shadow-lg rounded-lg '>
                    <div className='w-25 h-25 flex items-center justify-center bg-blue-500/30 rounded-full'>
                        <img className='' src={user} alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>Create Account</h1>
                    <p className='text-gray-500 text-sm'>Sign up for free in seconds. No credit card required to get started.</p>
                    <p className='absolute top-5 right-5 text-xs bg-blue-700 w-7 h-7 rounded-full text-white flex items-center justify-center'>01</p>
                </div>

                <div className='relative flex flex-col justify-center items-center space-y-3 p-6 shadow-lg rounded-lg '>
                    <div className='w-25 h-25 flex items-center justify-center bg-blue-500/30 rounded-full'>
                        <img className='' src={box} alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>Choose Product</h1>
                    <p className='text-gray-500 text-sm'>Browse our catalog and select the tools<br /> that fit your needs.</p>
                    <p className='absolute top-5 right-5 text-xs bg-blue-700 w-7 h-7 rounded-full text-white flex items-center justify-center'>02</p>
                </div>

                <div className='relative flex flex-col justify-center items-center space-y-2 p-6 shadow-lg rounded-lg  '>
                    <div className='w-25 h-25 flex items-center justify-center bg-blue-500/30 rounded-full'>
                        <img className='' src={rocket} alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>Start Creating</h1>
                    <p className='text-gray-500 text-sm'>Download and start using your premium<br /> tools immediately.</p>
                    <p className='absolute top-5 right-5 text-xs bg-blue-700 w-7 h-7 rounded-full text-white flex items-center justify-center'>03</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;