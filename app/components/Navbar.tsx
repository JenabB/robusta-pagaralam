'use client';
import React from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import navbar from '../constants/navbar'
import useScreenSize from '../hooks/useScreenSize'
import NavbarMobile from './NavbarMobile';
import Link from 'next/link';

const Navbar = () => {
    const { category } = useScreenSize();

    if (category !== "lg") {
        return <NavbarMobile />
    }

    return (
        <div className='sticky top-0 z-50 flex justify-between p-7 bg-black text-white font-semibold'>
            <Link href="/">
                App logo
            </Link>
            <div className='flex space-x-12'>
                {navbar.map((item, index) => (
                    <Link key={index} href={item.path} className='uppercase' >
                        {item.name}
                    </Link>
                ))}
            </div>
            <MagnifyingGlassCircleIcon className="h-8 w-8 text-white" />
        </div>
    )
}

export default Navbar