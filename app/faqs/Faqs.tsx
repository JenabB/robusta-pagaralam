'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import faqs from '../constants/faqs';
import useScreenSize from '../hooks/useScreenSize';

const Faqs = () => {
    const { category } = useScreenSize();

    return (
        <div className='' id="faqs">
            <div className='lg:w-3/4 lg:mx-auto mt-2 lg:mt-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {faqs.map((item, index) =>
                        <div key={index} className='bg-gray-200 m-4 rounded-lg xs:mb-0'>
                            <div className='p-4 pb-0'>
                                <p className='font-bold'>{item.title}</p>
                                <hr />
                            </div>

                            <ul className='p-4 '>
                                {item.items.map((i, indexItem) => (
                                    <li className='text-sm' key={indexItem}>
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