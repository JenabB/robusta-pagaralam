
import React, { useState } from 'react';
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import navbar from '../constants/navbar';

const NavbarMobile = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-black p-4 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                <button onClick={toggleMobileMenu} className="lg:hidden text-white focus:outline-none">
                    <Bars3Icon className="w-6 h-6" />
                </button>
                <Link href="/">
                    <div className="text-white font-bold text-lg">Logo</div></Link>
                <div>
                    {/* <MagnifyingGlassCircleIcon className="h-6 w-6 text-white" /> */}
                </div>
            </div>

            {mobileMenuOpen && (
                <div className={` w-8/12 w-lg:hidden fixed inset-0 bg-black transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='p-4'>
                        {navbar.map((item, index) =>
                            <div className='my-4' key={index}>
                                <Link href={item.path} onClick={() => setMobileMenuOpen(false)}>
                                    <p className='text-white uppercase font-bold'>
                                        {item.name}
                                    </p></Link>
                                <hr />
                            </div>)}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarMobile;