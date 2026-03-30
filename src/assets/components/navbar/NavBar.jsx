import React from 'react';
import NavItems from './navitems/NavItems';
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
    const navItems = [
  { "id": 1, "name": "Products", "path": "#products" },
  { "id": 2, "name": "Features", "path": "#features" },
  { "id": 3, "name": "Pricing", "path": "#pricing" },
  { "id": 4, "name": "Testimonials", "path": "#testimonial" },
  { "id": 5, "name": "FAQ", "path": "#faq" },
];

    return (
        <div className='max-w-400 mx-auto px-50 py-6 flex justify-between items-center shadow-xs'>
            <h2 className='text-3xl text-purple-600 font-bold'>DigiTools</h2>
            <ul className=' flex gap-8'>
                {
                    navItems.map((item) => <NavItems item={item} key={item.id}></NavItems>)
                }
            </ul>
            <div className='flex items-center gap-4'>
                <button className='btn btn-outline border-none relative'>
                    <ShoppingCart></ShoppingCart>
                    <p className='bg-red-600 text-[10px] text-white rounded px-1 absolute top-[12%] left-[50%] hidden'>0</p>
                </button>
                <button className='btn btn-outline border-none'>Login</button>
                <button className='btn btn-primary rounded-3xl'>Get Started</button>
            </div>
        </div>
    );
};

export default NavBar;