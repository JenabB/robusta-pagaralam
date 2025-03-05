'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ImageDetails from './ImageDetails';

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const imagesWithText = [
        { image: '/images/gallery/3-march-2025.webp', year: '2025', month: 'March', date: '3', description: `Coordination with supplier PTPN1 7th Regional Pagar Alam` },
        { image: '/images/gallery/9-december-2024.webp', year: '2024', month: 'December', date: '9', description: `attend local exporters' meetings to exchange knowledge.` },
        { image: '/images/gallery/14-april-2024.webp', year: '2024', month: 'April', date: '14', description: 'Visiting to tea product supplier factory.' },
        { image: '/images/gallery/march-2-2024.webp', year: '2024', month: 'March', date: '26', description: 'Chat to recognize the potential of local tea and cooperation in export with PTPN7.' },
        { image: '/images/gallery/march-2024.webp', year: '2024', month: 'March', date: '17', description: 'Initate meeting with the Pagaralam Coffee Activist Community regarding supplier cooperation.' },


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
        <div>

            <div id="gallery" className='bg-white mt-2'>

                <div className='p-3 pl-4 lg:p-8'>

                    <div className="flex overflow-x-scroll space-x-4">
                        {imagesWithText.map((item, index) => <div key={index}>
                            <div style={{ width: isMobile ? '300px' : '500px' }} className='cursor-pointer'>
                                <img width={isMobile ? 300 : 500}

                                    style={{ height: isMobile ? 250 : 350, objectFit: 'cover' }}
                                    src={item.image} alt="gallery"
                                    onClick={() => {
                                        setOpen(true);
                                        setSelectedImage(item.image);
                                    }}

                                />
                                <div style={{ height: '70px' }}>
                                    <p className='my-4 px-2 text-sm'>{item.description}</p>
                                </div>
                                <div className='bg-black p-2 mb-4'>
                                    <h1 className='font-bold uppercase text-white'>{item.year + " " + item.month + ' ' + item.date}</h1>
                                </div>

                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <ImageDetails image={selectedImage} open={open} onClose={() => {
                setOpen(false)
                setSelectedImage(null)
            }} />
        </div>
    );
};

export default Gallery;