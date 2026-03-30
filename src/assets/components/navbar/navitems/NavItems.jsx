import React from 'react';

const NavItems = ({item}) => {
    return (
        <div>
            <li className='font-semibold text-[#101727] hover:text-blue-700'><a href={item.path}>{item.name}</a></li>
        </div>
    );
};

export default NavItems;