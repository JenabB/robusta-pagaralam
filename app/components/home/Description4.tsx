'use client'
import useScreenSize from '@/app/hooks/useScreenSize';
import React from 'react'
import CheckDetails from '../CheckDetails';

const Description4 = () => {
    const { category } = useScreenSize();

    return (
        <div className='lg:px-4 lg:bg-amber-800 lg:text-white lg:mt-0 '>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {category !== 'lg' && <div>
                    <img
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                        }}
                        alt='robusta'
                        src="https://normcorecoffee.com.au/cdn/shop/articles/Natural-Robusta-Coffee-Beans-Specialty-Robusta-Coffee-From-Vietnam-2.jpg?v=1684039740"
                    />
                </div>}
                {category !== 'lg' && <div className='flex flex-col justify-center items-center text-white bg-amber-800'>
                    <div className='mb-4 mt-8'>
                        <h1 className='font-extrabold text-5xl'>ROBUSTA</h1>
                        <h1 className='font-extrabold text-5xl'>ASALAN</h1>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <p>
                            This type of coffee is more widely produced in Pagaralam city, this is because the process is not the same as red picking coffee, if red picking coffee is only picked red color, it is different from this asalan coffee, farmers pick both red and green coffee cherries simultaneously, even so the process is still considered so that when sorting it still produces quality beans.
                            produce quality beans.
                        </p>
                        <div className='mt-4 mb-10 flex justify-center'>
                            <CheckDetails textColor='text-white' path="/product" />
                        </div>
                    </div>
                </div>}
                {category === 'lg' && <div>
                    <img
                        style={{
                            width: '100%',
                            height: '500px',
                            objectFit: 'cover'
                        }}
                        alt='robusta'
                        src="https://normcorecoffee.com.au/cdn/shop/articles/Natural-Robusta-Coffee-Beans-Specialty-Robusta-Coffee-From-Vietnam-2.jpg?v=1684039740"
                    />
                </div>}
                {category === 'lg' && <div className='w-3/5 mx-auto flex flex-col justify-center items-center'>
                    <div className='mb-4'>
                        <h1 className='font-extrabold text-5xl'>ROBUSTA</h1>
                        <h1 className='font-extrabold text-5xl'>ALASAN</h1>
                    </div>
                    <div>
                        <p className='mb-2'>
                            This type of coffee is more widely produced in Pagaralam city, this is because the process is not the same as red picking coffee, if red picking coffee is only picked red color, it is different from this asalan coffee, farmers pick both red and green coffee cherries simultaneously, even so the process is still considered so that when sorting it still produces quality beans.
                            produce quality beans.
                        </p>
                        <div className='flex justify-center'>
                            <CheckDetails textColor='text-white' path="/product" />
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Description4