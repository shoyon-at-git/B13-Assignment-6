import React, { use } from 'react';
import PlanCards from './PlanCards';

const Plans = ({planPromise}) => {
    const plans = use(planPromise);
    // console.log(plans);
    
    return (
        <div>
            <div className='text-center space-y-4'>
                <h1 className='text-2xl lg:text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='mt-10  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {
                    plans.map(plan =>
                        <PlanCards key={plan.id} plan={plan}></PlanCards>
                    )
                }
            </div>
        </div>
    );
};

export default Plans;