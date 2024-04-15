import React, { useEffect, useState } from 'react'
import { styles, responsiveStyles } from './gridStyles';

const FazzaGrid = () => {
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

    const images = [
        '/images/grid/1.webp', '/images/grid/2.webp',
        '/images/grid/3.webp', '/images/grid/4.webp',
        '/images/grid/5.webp', '/images/grid/6.webp',
        '/images/grid/7.webp', '/images/grid/8.webp',

    ]

    const randomSize = () => {
        const randomNumber = Math.random() * 100; // Generate random number between 0 and 100

        if (randomNumber < 40) {
            return 'small'; // 40% probability for 'small'
        } else if (randomNumber < 75) {
            return 'medium'; // 35% probability for 'medium'
        } else {
            return 'large'; // 25% probability for 'large'
        }
    };

    return (
        <div className='w-full' style={{ display: isMobile ? 'none' : 'block' }}>
            <div style={{ ...responsiveStyles.pin_container }}>
                {images.map((im, idx) => <div key={idx} style={{
                    ...responsiveStyles.card, ...responsiveStyles[randomSize()]
                }}>
                    <img src={im} alt="grid" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>)}
            </div>
        </div>
    )
}

export default FazzaGrid