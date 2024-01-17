import React from 'react'
import { InboxStackIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
const Featured = () => {


    return (
        <div className='my-6 lg:my-10 lg:mb-24'>
            <div className='grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-14'>
                <div className='flex flex-col justify-center text-center p-4'>
                    <InboxStackIcon className="h-20 text-amber-800 mb-4" />
                    <h3 className='font-bold text-xl mb-2'>Best Quality</h3>
                    <p className='text-sm'>Our packaging solutions ensure the ultimate protection without compromising on aesthetics.</p>
                </div>
                <div className='flex flex-col justify-center text-center p-4'>
                    <ChatBubbleLeftRightIcon className="h-20 text-amber-800 mb-4" />
                    <h3 className='font-bold text-xl mb-2'>Negotible</h3>
                    <p className='text-sm'>Do two-way communication and get price deals faster from our products.</p>
                </div>
                <div className='flex flex-col justify-center text-center p-4'>
                    <InboxStackIcon className="h-20 text-amber-800 mb-4" />
                    <h3 className='font-bold text-xl mb-2'>Best Quality</h3>
                    <p className='text-sm'>Our packaging solutions ensure the ultimate protection without compromising on aesthetics.</p>
                </div>
            </div>
        </div>
    )
}

export default Featured