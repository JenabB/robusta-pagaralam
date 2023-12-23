import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface Props {
    textColor: string;
    path: string;

}

const CheckDetails = (props: Props) => {
    return (
        <Link href={props.path}>
            <div className='flex space-x-2'>
                <p className={`font-bold underline ${props.textColor}`}>Check details product</p>
                <ArrowLongRightIcon className='h-6 w-6' />
            </div></Link>
    )
}

export default CheckDetails