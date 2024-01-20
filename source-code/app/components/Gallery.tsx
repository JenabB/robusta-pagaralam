'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Gallery = () => {

    const images = [
        '/images/gallery/1.jpeg', '/images/gallery/2.jpeg',
        '/images/gallery/5.jpeg', '/images/gallery/6.jpeg',
        '/images/gallery/7.jpeg', '/images/gallery/8.jpeg', '/images/gallery/9.jpeg',
        '/images/gallery/10.jpeg', '/images/gallery/12.jpeg',
    ]

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Ganti nilai sesuai dengan breakpoint yang diinginkan
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className='bg-white mt-4'>
            <div className='p-3 pl-4 lg:p-8'>
                <div className="flex overflow-x-scroll space-x-4">
                    {images.map((item, index) => <div key={index}>
                        <div style={{ height: isMobile ? '250px' : '500px', width: isMobile ? '300px' : '500px' }} className=''>
                            <Image width={isMobile ? 300 : 500} height={isMobile ? 250 : 500} className="rounded-md" src={item} alt="gallery" />
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;