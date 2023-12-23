'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import useScreenSize from '@/app/hooks/useScreenSize';
import CheckDetails from '../CheckDetails';


const Description3 = () => {
    const { category } = useScreenSize()

    return (
        <div className='lg:bg-purple-500'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {category !== 'lg' &&
                    <div>
                        <img
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover'
                            }}
                            alt='robusta'
                            src="https://lh4.googleusercontent.com/i3C1qxnJKY5_eLx-6flYyZhaHvIJpIFgrXyolRSQHfhKSFirvlms3HIOVwAQYybTUa6G7ejFvr2dkm2CppYboDrJrVwehaSu-lkYIfkvslha-mVn1gBXHm6uZ1tePjIrmwpQcC1rfCvNVdOUCw"
                        />
                    </div>}
                {category !== 'lg' &&
                    <div className='flex flex-col justify-center items-center text-black bg-purple-900'>
                        <div className='mb-4 mt-8 lg:mt-1'>
                            <h1 className='font-extrabold text-5xl'>ROBUSTA</h1>
                            <h1 className='font-extrabold text-5xl'>WINE</h1>
                        </div>
                        <p className='w-3/4 mx-auto'>
                            Robusta wine is produced through a fermentation process
                            process carried out by Pagaralam city farmers by
                            manually, i.e. Only red cherries are put in
                            plastic layer sacks then tightly closed and
                            allowed to stand for some time.
                        </p>
                        <div className='mt-4 mb-12'>
                            <CheckDetails textColor='text-black' path="/product" />
                        </div>
                    </div>
                }
                {category === 'lg' && <div id='first' className='w-3/5 mx-auto flex flex-col justify-center  items-center'>
                    <div className='mb-4 mt-8 lg:mt-1'>
                        <h1 className='font-extrabold text-5xl'>ROBUSTA</h1>
                        <h1 className='font-extrabold text-5xl'>WINE</h1>
                    </div>
                    <p className='mb-2'>
                        Robusta wine is produced through a fermentation process
                        process carried out by Pagaralam city farmers by
                        manually, i.e. Only red cherries are put in
                        plastic layer sacks then tightly closed and
                        allowed to stand for some time.
                    </p>
                    <CheckDetails textColor='text-black' path="/product" />
                </div>}
                {category === 'lg' && <div id="second">
                    <img
                        style={{
                            width: '100%',
                            height: category === 'lg' ? '500px' : '400px',
                            objectFit: 'cover'
                        }}
                        alt='robusta'
                        src="https://lh4.googleusercontent.com/i3C1qxnJKY5_eLx-6flYyZhaHvIJpIFgrXyolRSQHfhKSFirvlms3HIOVwAQYybTUa6G7ejFvr2dkm2CppYboDrJrVwehaSu-lkYIfkvslha-mVn1gBXHm6uZ1tePjIrmwpQcC1rfCvNVdOUCw"
                    />
                </div>}
            </div>
        </div>
    )
}

export default Description3