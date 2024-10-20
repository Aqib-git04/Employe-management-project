import React from 'react'

const Header = () => {
    return (
        <div className='flex items-end justify-between p-4'>
            <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-semibold'>SYED AQIB 👋</span>   </h1>
            <button className='bg-red-500 text-white px-5 py-2 rounded'>Log Out</button>
        </div>
    )
}

export default Header
