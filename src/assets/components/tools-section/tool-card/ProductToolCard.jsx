import React from 'react';
import ToolCard from './ToolCard';

const ProductToolCard = ({data, cart, setCart}) => {
    // console.log(data);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 rounded-md shadow-md'>
                {
                    data.map(tool =>
                    {
                        return(<ToolCard key={tool.id} tool={tool} cart={cart} setCart={setCart}></ToolCard>)
                    }
                    )
                }
            </div>
    );
};

export default ProductToolCard;