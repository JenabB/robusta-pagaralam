import Image from 'next/image'
import React from 'react'

const RegisteredOn = () => {

    const registeredImage = ["/images/registered/oss.png", "/images/registered/pengayoman.png", "/images/registered/perdagangan.png", "/images/registered/djp.jpg"]

    return (
        <div className='text-center my-10 lg:my-24 px-4'>
            <div className='flex gap-x-10 justify-center'>
                {registeredImage.map((image, index) =>
                    <div key={index} className='flex justify-center'>
                        <Image src={image} width={100} height={150} alt="registered on" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RegisteredOn