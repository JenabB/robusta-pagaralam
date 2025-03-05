import React, { useEffect, useState } from 'react';
import { styles, responsiveStyles } from './gridStyles';
import ImageDetails from './ImageDetails';

const FazzaGrid = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        '/images/grid/1.webp',
        '/images/grid/2.webp',
        '/images/grid/3.webp',
        '/images/grid/4.webp',
        '/images/grid/5.webp',
        '/images/grid/6.webp',
        '/images/grid/7.webp',
        '/images/grid/8.webp',
        "/images/grid/9.webp",
        '/images/grid/10.webp',
        '/images/grid/11.webp'
    ];

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
        <div>
            <div className='py-4' style={{ backgroundColor: '#FEFAEF' }}>
                <div className='grid grid-cols-2 lg:grid-cols-4 lg:w-2/3 mx-auto cursor-pointer'>
                    {images.map((item, index) => <div key={index} className='m-1' onClick={() => {
                        setOpen(true);
                        setSelectedImage(item);
                    }}>
                        <img src={item} style={{ height: '200px', width: '100%', objectFit: 'cover' }} /></div>)}
                </div>
            </div>
            <ImageDetails image={selectedImage} open={open} onClose={() => {
                setOpen(false)
                setSelectedImage(null)
            }} />
        </div>
    );
};

export default FazzaGrid;
