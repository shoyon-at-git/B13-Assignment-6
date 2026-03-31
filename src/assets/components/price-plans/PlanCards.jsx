import { Check } from 'lucide-react';
import React from 'react';

const PlanCards = ({plan}) => {
    // console.log(plan);
    
    return (
        <div className='group relative p-6 shadow-lg rounded-md hover:bg-purple-600  hover:text-white flex flex-col'>
            <h1 className='font-extrabold text-2xl mb-2'>{plan.name}</h1>
            <p className='text-sm text-gray-500 group-hover:text-white mb-8'>{plan.subtitle}</p>
            <p className='text-gray-500 mb-8 group-hover:text-white'><span className='font-extrabold text-3xl text-black group-hover:text-white'>${plan.price}</span>/<span>{plan.billing}</span></p>
            <ul className=' mb-6 flex-1 text-gray-500'>
                {
                    plan.features.map(feature=>
                        <li className='flex gap-1 group-hover:text-white' key={plan.id}><Check className='text-green-500 group-hover:text-white'></Check>{feature}</li>
                    )
                }
            </ul>
            <button className='btn w-full rounded-3xl btn-primary group-hover:bg-white group-hover:text-purple-600 font-bold'>{plan.buttonText}</button>
            <p className={`${plan.popular ? "" : "hidden"} text-xs group-hover:bg-yellow-200 w-fit py-1 px-2 rounded-2xl border border-yellow-500 font-semibold text-yellow-700 absolute -top-3 left-[40%]`}>{plan.badge}</p>
        </div>
    );
};

export default PlanCards;