'use client';
import React from 'react'
import navbar from '../constants/navbar'
import useScreenSize from '../hooks/useScreenSize'
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
    const { category } = useScreenSize();
    if (category !== "lg") {
        return <NavbarMobile />
    }

    return (
        <div className='sticky top-0 z-50 flex justify-between items-center p-5 bg-black text-white font-semibold'>
            <div>
            </div>
            <ul className='flex space-x-12'>
                {navbar.map((item, index) => (
                    <li key={index} className='uppercase' >
                        <a href={`${item.path}`}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div></div>
        </div>
    )
}

export default Navbar