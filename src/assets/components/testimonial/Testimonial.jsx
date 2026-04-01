import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <h1 className="font-extrabold text-2xl lg:text-4xl mb-3 text-white">Ready to Transform Your Workflow?</h1>
                    <p className="text-gray-100/80 text-sm md:text-[16px] mb-10">Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
                    <div className="flex gap-4 justify-center">
                        <a className="btn text-blue-700 rounded-3xl" href="#products">Explore Products</a>
                        <a className="btn bg-transparent rounded-3xl text-white" href="#pricing">View Pricing</a>
                    </div>
        </div>
    );
};

export default Testimonial;