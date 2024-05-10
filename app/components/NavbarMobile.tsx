
import React, { useState } from 'react';
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid';
import navbar from '../constants/navbar';
import Image from 'next/image';

const NavbarMobile = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="p-4 sticky top-0 z-50" style={{ backgroundColor: '#545C36' }}>
            <div className="flex items-center justify-between">
                <button onClick={toggleMobileMenu} className="lg:hidden text-white focus:outline-none">
                    <Bars3Icon className="w-6 h-6" />
                </button>
                <a href='/'>
                    <Image
                        alt="logo"
                        src="/images/fazza-icon-circle.png"
                        width={30}
                        height={30}
                    />
                </a>
                <div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div style={{ backgroundColor: '#545C36' }} className={` w-8/12 w-lg:hidden fixed inset-0  transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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