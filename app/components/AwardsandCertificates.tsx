import React from 'react'
import awards from "@/app/data/awards.json"
import Title from './Title';

const AwardsandCertificates = () => {
    return (
        <div className=' bg-slate-100 pt-10 pb-2'>
            <Title text='Certificaties & Awards' />
            <div className='grid grid-cols-1 lg:flex justify-center my-24 lg:space-x-10 lg:px-10'>
                {awards.awards.map((item, index) => <div key={index} className='mb-10'>
                    <img src={item.image} style={{ height: '500px', width: '100%' }} />
                </div>)}
                {awards.certificaties.map((item, index) => <div key={index} className='mb-10'>
                    <img src={item.image} style={{ height: '500px', width: '100%' }} />
                </div>)}
            </div>
        </div>
    )
}

export default AwardsandCertificates