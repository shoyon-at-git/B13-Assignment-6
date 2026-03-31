import React, { use, useState } from 'react';
import ToolCard from './tool-card/ToolCard';
import ProductToolCard from './tool-card/ProductToolCard';
import CartToolCard from './tool-card/CartToolCard';

const ToolsData = ({toolsPromise, cart, setCart}) => {
    const data = use(toolsPromise);
    // console.log(data);
    const [selectedBtn , setSelectedBtn] = useState("products")
    return (
        <div>
            <div className='text-center space-y-4 mb-10 flex flex-col justify-center items-center'>
                <h1 className='text-[#101727] font-extrabold text-5xl'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-sm'>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                <div className='shadow-lg w-fit p-1 rounded-3xl flex gap-4'>
                    <button className={`btn ${selectedBtn==="products" ? "btn-primary" : "btn-outline"} border-none rounded-3xl`} onClick={()=>{setSelectedBtn("products")}}>Products</button>
                    <button className={`btn ${selectedBtn==="cart" ? "btn-primary" : "btn-outline"} border-none rounded-3xl`} onClick={()=>{setSelectedBtn("cart")}}>Cart ({cart.length})</button>
                </div>
            </div>
            {
                selectedBtn === "products" ?
                <ProductToolCard data={data} cart={cart} setCart={setCart}></ProductToolCard> :
                <CartToolCard cart={cart} setCart={setCart}></CartToolCard>
            }
        </div>
    );
};

export default ToolsData;