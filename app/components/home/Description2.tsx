'use client'
import useScreenSize from '@/app/hooks/useScreenSize';
import React from 'react'
import CheckDetails from '../CheckDetails';
import PriceTable from '../PriceTable';

const Description2 = () => {
    const { category } = useScreenSize();

    return (
        <div className='lg:px-4 lg:bg-black lg:text-white lg:mt-0 mt-10'>
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
                {category !== 'lg' && <div className='flex flex-col justify-center items-center text-white bg-black'>
                    <div className='mb-4 mt-8'>
                        <h1 className='font-extrabold text-5xl'>ROBUSTA</h1>
                        <h1 className='font-extrabold text-5xl'>PEABERRY</h1>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <p>
                            Robusta Peaberry is known as
                            term lanang coffee by the people of
                            Pagaralam city because the coffee beans
                            peaberry is a single coffee bean
                            which is obtained from the sorting process of
                            premium robusta coffee beans, but
                            although both are from red plucked coffee
                            coffee, the flavor and aroma are different.
                        </p>
                        <div className='flex justify-center mt-4 mb-8'>
                            <PriceTable />
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
                        <h1 className='font-extrabold text-5xl'>PEABERRY</h1>
                    </div>
                    <p>
                        Robusta Peaberry is known as
                        term lanang coffee by the people of
                        Pagaralam city because the coffee beans
                        peaberry is a single coffee bean
                        which is obtained from the sorting process of
                        premium robusta coffee beans, but
                        although both are from red plucked coffee
                        coffee, the flavor and aroma are different.
                    </p>
                    <div className='flex justify-center mt-4 mb-8'>
                        <PriceTable />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Description2