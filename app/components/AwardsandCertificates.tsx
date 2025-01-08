import React, { useState } from 'react'
import awards from "@/app/data/awards.json"
import Title from './Title';
import ImageDetails from './ImageDetails';

const AwardsandCertificates = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    return (
        <div className=' bg-slate-100 pt-10'>
            <Title text='Certificaties & Awards' />
            <div className='grid grid-cols-1 lg:flex justify-center mt-20 lg:space-x-10 lg:px-10'>
                {awards.awards.map((item, index) => <div key={index} className='mb-10'>
                    <img src={item.image} style={{ height: '500px', width: '100%' }}
                        onClick={() => {
                            setOpen(true);
                            setSelectedImage(item.image);
                        }}

                    />
                </div>)}
                {awards.certificaties.map((item, index) => <div key={index} className='mb-10'>
                    <img src={item.image} style={{ height: '500px', width: '100%' }} onClick={() => {
                        setOpen(true);
                        setSelectedImage(item.image);

                    }} />
                </div>)}
            </div>
            <ImageDetails image={selectedImage} open={open} onClose={() => {
                setOpen(false)
                setSelectedImage(null)
            }} />
        </div>
    )
}

export default AwardsandCertificates