import React from 'react';
import ToolCard from './ToolCard';

const ProductToolCard = ({data, cart, setCart}) => {
    // console.log(data);
    
    return (
        <div className='grid grid-cols-3 gap-[30px] rounded-md shadow-md'>
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