import React from 'react'
import Title from './Title'

const ShippingPort = () => {
    return (
        <div>
            <div className='mt-8'></div>
            <Title text='Our Shipping Port' />
            <div className='mb-8'></div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-x-4 px-4 gap-y-4'>
                <div className='text-center'>
                    <p className='mb-4 font-meduim uppercase tracking-wide'>Boom Baru Port</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4243946457564!2d104.77431037570116!3d-2.9796310398231234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b763e7cf82813%3A0x1285b89a657e722!2sPelabuhan%20Boom%20Baru!5e0!3m2!1sid!2sid!4v1714814203055!5m2!1sid!2sid"
                        width="100%"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy={"no-referrer-when-downgrade"}>

                    </iframe>
                </div>
                <div className='text-center'>
                    <p className='mb-4 font-meduim uppercase tracking-wide'>Boom Baru Port</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869.14990181439!2d106.87136695949046!3d-6.091922865690229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f09ec0c58a7%3A0x2788cecfeed3bbc!2sTandjungperiuk!5e0!3m2!1sid!2sid!4v1740238326275!5m2!1sid!2sid"
                        width="100%"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy={"no-referrer-when-downgrade"}>

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ShippingPort