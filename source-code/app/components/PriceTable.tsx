import React from 'react'

const PriceTable = () => {
    return (
        <div className='grid grid-cols-2 text-center text-black'>
            <div>
                <p className='bg-gray-400 py-2 px-4 font-bold'>Grade</p>
                <p className='bg-gray-200 py-2 px-4'>3</p>
            </div>
            <div>
                <p className='bg-gray-400 py-2 px-14 font-bold'>Price/Kg</p>
                <p className='bg-gray-200 py-2 px-4'>100</p>
            </div>
        </div>
    )
}

export default PriceTable