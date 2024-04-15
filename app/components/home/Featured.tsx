import React from 'react'
import { InboxStackIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

const Featured = () => {
    return (
        <div className='lg:mb-14 lg:w-4/5 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 p-4 pt-0'>
                <div className='flex flex-col justify-center text-center p-4'>
                    <InboxStackIcon className="h-16 text-amber-800 mb-4" />
                    <h3 className='font-bold text-xl mb-2'>Best Quality</h3>
                    <p className='text-sm'>Our packaging solutions ensure the ultimate protection without compromising on aesthetics.</p>
                </div>
                <div className='flex flex-col justify-center text-center p-4'>
                    <ChatBubbleLeftRightIcon className="h-16 text-amber-800 mb-4" />
                    <h3 className='font-bold text-xl mb-2'>Negotible</h3>
                    <p className='text-sm'>Do two-way communication and get price deals faster from our products.</p>
                </div>
                <div className='flex flex-col justify-center text-center p-4'>
                    <CheckBadgeIcon className="h-16 text-amber-800 mb-4" />
                    <h3 className='font-bold text-xl mb-2'>Organic</h3>
                    <p className='text-sm'>Experience the refreshing allure from our organic products.</p>
                </div>
            </div>
        </div>
    )
}

export default Featured