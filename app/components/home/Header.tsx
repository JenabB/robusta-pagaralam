'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const style: any = {
        height: isMobile ? '400px' : '650px',
        marginBottom: '100px'
    }

    return (
        <div >
            <div className='text-white text-center px-4 py-32' style={{
                backgroundColor: '#545C36',
                backgroundImage: 'url(/images/header.webp)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'grayscale(60%)',
            }}>
                <h1 className='text-4xl font-poppins'>FAZZA INDO OMAIRA</h1>
                <p className='mt-4 lg:w-1/2 text-center mx-auto px-4 font-poppins'>
                    Strives to run its business sustainably As an international trading company, our company is run by expertise.
                </p>
            </div>
            {/* <div
                style={{
                    backgroundImage: `url(/images/containers.webp)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'grayscale(40%)',
                    height: isMobile ? '450px' : '650px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <div className='bg-white px-2 lg:px-10 m-4 py-2'>
                    <Image src="/images/logo-long.webp" width={isMobile ? 350 : 500} height={200} alt='main banner' />
                </div>
            </div> */}
        </div>

    );
}

export default Header;