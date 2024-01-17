'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import second from "../../../public/images/gallery/9.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
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

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const style: any = {
        height: isMobile ? '500px' : '650px',
        width: '100%',
        objectFit: 'cover'
    }

    return (
        <div>
            <Slider {...settings}>
                <div style={style}>
                    <div
                        style={{
                            backgroundImage: `url(/images/containers.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'grayscale(90%)',
                            height: isMobile ? '500px' : '650px', display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                    >
                        <div className='bg-white px-2 lg:px-10 m-4 py-2'>
                            <img src="/images/logo-long.png" />
                        </div>
                    </div>
                </div>
                <div style={style}>
                    <div
                        style={{
                            backgroundImage: `url(/images/gallery/6.jpeg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'grayscale(100%)',
                            height: isMobile ? '500px' : '650px', display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                    >
                        <div className='bg-white lg:w-2/4 p-2 m-4 lg:p-6'>
                            <div className='text-center font-extrabold text-4xl lg:text-5xl'>
                                <h1>ROBUSTA COFFEE</h1>
                                <h1>FROM PAGAR</h1>
                                <h1>ALAM</h1>
                            </div>
                            <div className='text-center mt-8 p-2'>
                                <p className='italic lg:text-md xs:text-sm'>
                                    robusta coffee grown above
                                    altitude of 1000-1400 meters above sea level
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>

        </div>

    );
}

export default Header;