'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import faqs from '../constants/faqs';
import useScreenSize from '../hooks/useScreenSize';

const Faqs = () => {
    const { category } = useScreenSize();

    return (
        <div className=''>
            <Navbar />
            <div className='lg:w-1/2 lg:mx-auto mt-2 lg:mt-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {faqs.map((item, index) =>
                        <div key={index} className='bg-white m-4 xs:mb-0'>
                            <div className='p-4 pb-0'>
                                <p className='font-bold'>{item.title}</p>
                            </div>

                            <ul className='p-4'>
                                {item.items.map((i, indexItem) => (
                                    <li className='text-sm list-disc' key={indexItem}>
                                        {i}
                                    </li>
                                ))}
                            </ul>
                            {category !== 'lg' && <hr className='mt-5' />}
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Faqs