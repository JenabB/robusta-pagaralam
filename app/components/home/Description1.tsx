'use client'
import React from 'react'
import useScreenSize from '@/app/hooks/useScreenSize';
import CheckDetails from '../CheckDetails';
import PriceTable from '../PriceTable';

const Description1 = () => {
    const { category } = useScreenSize();
    const isLargeScreen = category === 'lg';

    return (
        <div id="product">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {!isLargeScreen && (
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
                    </div>
                )}
                <div id='first' className={`w-${isLargeScreen ? '3/5' : '4/5'} mx-auto flex flex-col justify-center items-center`}>
                    <div className='mb-4 mt-8 lg:mt-1'>
                        <h1 className={`font-${isLargeScreen ? 'bold' : 'extrabold'} font-pacifico text-${isLargeScreen ? '7xl' : '5xl'}`}>Robusta</h1>
                        <h1 className={`font-${isLargeScreen ? 'bold' : 'extrabold'} font-pacifico text-${isLargeScreen ? '7xl' : '5xl'}`}>Premium</h1>
                    </div>
                    <p className={`font-edu ${isLargeScreen ? 'text-2xl' : ''}`}>
                        Premium Robusta coffee is processed with lovingly from the beginning planting, maintenance to the harvest process so that the results of this coffee are maximized, all processes are still done traditionally traditional, so the quality of coffee is more beautiful.
                    </p>
                    <div className='mt-4 mb-8'>
                        <PriceTable />
                    </div>
                </div>
                {isLargeScreen && (
                    <div id="second">
                        <img
                            style={{
                                width: '100%',
                                height: '500px',
                                objectFit: 'cover'
                            }}
                            alt='robusta'
                            src="https://lh4.googleusercontent.com/i3C1qxnJKY5_eLx-6flYyZhaHvIJpIFgrXyolRSQHfhKSFirvlms3HIOVwAQYybTUa6G7ejFvr2dkm2CppYboDrJrVwehaSu-lkYIfkvslha-mVn1gBXHm6uZ1tePjIrmwpQcC1rfCvNVdOUCw"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Description1;