import React from 'react';

const Info = () => {
    return (
        <>
            <div className=" border-r px-10 md:px-31 border-white/50 flex flex-col items-center gap-2 md:gap-3">
                        <h1 className="text-3xl xl:text-6xl font-bold xl:font-extrabold">50k+</h1>
                        <p className="font-normal xl:font-medium text-sm xl:text-2xl">Active Users</p>
                    </div>
                    <div className=" border-white/50 flex flex-col items-center gap-2 md:gap-3">
                        <h1 className="text-3xl xl:text-6xl font-bold xl:font-extrabold">200+</h1>
                        <p className="font-normal xl:font-medium text-sm xl:text-2xl">Premium Tools</p>
                    </div>
                    <div className="border-l border-white/50 px-10 md:px-31 flex flex-col items-center gap-2 md:gap-3">
                        <h1 className="text-3xl xl:text-6xl font-bold xl:font-extrabold">4.9</h1>
                        <p className="font-normal xl:font-medium text-sm xl:text-2xl">Rating</p>
                    </div>
        </>
    );
};

export default Info;