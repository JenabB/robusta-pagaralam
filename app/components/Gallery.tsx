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
                        {imagesWithText.map((item, index) => (
                            <div key={index}>
                                <div
                                    style={{ width: isMobile ? '300px' : '500px' }}
                                    className="cursor-pointer relative"
                                >
                                    {/* Date component positioned at top right of the image */}
                                    <div className="absolute top-3 right-3 z-10 py-1 px-3 rounded-2xl" id="date" style={{
                                        backgroundColor: '#545c36'
                                    }}>
                                        <h1 className="font-bold uppercase text-white text-xs" style={{ letterSpacing: '0.5px' }}>
                                            {item.year + " " + item.month + ' ' + item.date}
                                        </h1>
                                    </div>

                                    {/* Description positioned at bottom of the image */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 z-10 p-3 bg-black bg-opacity-90 rounded-b-xl"
                                        style={{ fontSize: '12px', height: '55px' }}
                                    >
                                        <p className="text-white">{item.description}</p>
                                    </div>

                                    {/* Image */}
                                    <img
                                        width={isMobile ? 300 : 500}
                                        style={{ height: isMobile ? 250 : 350, objectFit: 'cover' }}
                                        src={item.image}
                                        className='rounded-lg'
                                        alt="gallery"
                                        onClick={() => {
                                            setOpen(true);
                                            setSelectedImage(item.image);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
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