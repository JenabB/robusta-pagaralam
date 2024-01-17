'use client'
import React from 'react'
import useScreenSize from '@/app/hooks/useScreenSize';
import CheckDetails from '../CheckDetails';


const Description1 = () => {
    const { category } = useScreenSize()

    return (
        <div
        // className='px-4 pt-10 w-3/4 mx-auto'
        >
            <div>

                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {category !== 'lg' &&
                        <div id="second">
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
                        <div id='first' className='w-3/5 mx-auto flex flex-col justify-center items-center'>
                            <div className='mb-4 mt-8 lg:mt-1'>
                                <h1 className='font-extrabold text-5xl'>ROBUSTA</h1>
                                <h1 className='font-extrabold text-5xl'>PREMIUM</h1>
                            </div>
                            <p>
                                Premium robusta coffee is processed with
                                lovingly from the beginning
                                planting, maintenance to the harvest process
                                so that the results of this coffee are maximized, ,
                                all processes are still done traditionally
                                traditional, so the quality of coffee is more
                                beautiful.
                            </p>
                            <div className='mt-4 mb-8'>
                                <CheckDetails textColor='text-black' path="/product" />
                            </div>
                        </div>
                    }
                    {category === 'lg' && <div id='first' className='w-3/5 mx-auto flex flex-col justify-center items-center'>
                        <div className='mb-4 mt-8 lg:mt-1'>
                            <h1 className='font-extrabold text-5xl'>ROBUSTA</h1>
                            <h1 className='font-extrabold text-5xl'>PREMIUM</h1>
                        </div>
                        <p>
                            Premium robusta coffee is processed with
                            lovingly from the beginning
                            planting, maintenance to the harvest process
                            so that the results of this coffee are maximized, ,
                            all processes are still done traditionally
                            traditional, so the quality of coffee is more
                            beautiful.
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
        </div>
    )
}

export default Description1