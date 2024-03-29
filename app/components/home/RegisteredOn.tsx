import Image from 'next/image'
import React from 'react'

const RegisteredOn = () => {

    const registeredImage = ["/images/registered/oss.png", "/images/registered/pengayoman.png", "/images/registered/perdagangan.png", "/images/registered/djp.jpg"]

    return (
        <div className='text-center my-10 lg:my-24'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-0 lg:mt-10'>
                {registeredImage.map((image, index) =>
                    <div key={index} className='flex justify-center'>
                        <Image src={image} width={200} height={200} alt="registered on" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RegisteredOn