import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import navbar from '../constants/navbar';

const NavbarMobile = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="p-4 sticky top-0 z-50 bg-[#545C36]">
            <div className="flex items-center justify-between">
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden text-white focus:outline-none transition-transform duration-300 ease-in-out"
                >
                    <Bars3Icon className="w-6 h-6" />
                </button>
                <Link href="/" className="flex items-center">
                    <Image
                        alt="logo"
                        src="/images/fazza-icon-circle.png"
                        width={30}
                        height={30}
                    />
                </Link>
                <div></div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-8/12 bg-[#545C36] transform 
                    transition-transform duration-300 ease-in-out lg:hidden
                    ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none transition-transform duration-300 hover:rotate-180"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4">
                    {navbar.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                my-4 transform transition-all duration-300 ease-in-out
                                ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'}
                                delay-[${index * 100}ms]
                            `}
                        >
                            <Link
                                href={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                            >
                                <p className="text-white uppercase font-bold hover:text-gray-200 transition-colors duration-200">
                                    {item.name}
                                </p>
                            </Link>
                            <hr className="mt-2 border-white/20" />
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavbarMobile;