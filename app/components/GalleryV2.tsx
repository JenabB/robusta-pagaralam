import React, { useEffect, useState } from 'react'
import data from "@/app/data/teaGallery.json"
import Image from 'next/image'


const GalleryV2 = () => {

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
            <div id="gallery" className='bg-white mt-4'>
                <div className='p-3 pl-4 lg:p-8'>
                    <div className="flex overflow-x-scroll space-x-4">
                        {data.teaGallery.map((item, index) => <div key={index}>
                            <div style={{ height: '250', width: isMobile ? '300px' : '550px' }} className=''>
                                <Image width={isMobile ? 300 : 550} height={250} className="rounded-md" src={item.image} alt="gallery" style={{ overflowY: 'hidden' }} />
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryV2