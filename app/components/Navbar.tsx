'use client';
import React from 'react'
import navbar from '../constants/navbar'
import useScreenSize from '../hooks/useScreenSize'
import NavbarMobile from './NavbarMobile';
import Image from 'next/image';

const Navbar = () => {
    const { category } = useScreenSize();
    if (category !== "lg") {
        return <NavbarMobile />
    }

    return (
        <div className='sticky top-0 z-50 flex justify-between items-center px-5 py-3 text-white font-semibold' style={{
            backgroundColor: '#545C36'
        }}>
            <div>
                <a href='/'>
                    <Image
                        alt="logo"
                        src="/images/fazza-icon-circle.png"
                        width={30}
                        height={30}
                    />
                </a>
            </div>
            <ul className='flex space-x-12'>
                {navbar.map((item, index) => (
                    <li key={index}>
                        <a className='font-poppins font-bold text-lg' href={`${item.path}`}>
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