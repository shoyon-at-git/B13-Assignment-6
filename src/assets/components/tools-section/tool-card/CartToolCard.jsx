import { ShoppingCart } from "lucide-react";
import React from "react";

const CartToolCard = ({ cart, setCart }) => {
    // console.log(cart);

    let total= 0;
    for(let cartItem of cart){
        total = total+ cartItem.price;
    }
    // console.log(total);
    
    const handleCheckout =() =>{
        setCart([]);
    }
    const handleRemove = (id) => {
        const remainingCart = cart.filter((item) => id !== item.id);
        setCart(remainingCart);
    };

    return (
        <div id="cart" className="space-y-4  px-5 py-4 rounded-md shadow-2xl">
            <h2 className="text-3xl font-bold">Your Cart</h2>

            {cart.length === 0 ? (
                <div className="flex flex-col items-center gap-4 py-10">
                    <div>
                        <ShoppingCart />
                    </div>
                    <p className="text-gray-500">Your cart is empty</p>
                </div>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className=" rounded-lg p-4 shadow-md flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-5 h-5 object-contain" />
                            <div>
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="font-semibold text-gray-500 text-sm">${item.price}</p>
                            </div>
                        </div>
                        <p onClick={() => handleRemove(item.id)} className="btn btn-outline border-none">Remove</p>
                    </div>
                ))
            )}
            <div className={`flex justify-between text-gray-500 w-full ${cart.length === 0 ? "hidden" : ""}`}>
                <p>Total:</p>
                <p className="text-black text-xl font-bold">${total}</p>
            </div>
            <button onClick={handleCheckout} className={`btn btn-primary w-full ${cart.length === 0 ? "hidden" : ""}`}>Proceed to checkout</button>
        </div>
    );
};

export default CartToolCard;