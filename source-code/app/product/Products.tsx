'use client'
import React from 'react'
import ProductTable from './ProductTable'
import useScreenSize from '../hooks/useScreenSize'
import ProductTableMobile from './ProductTableMobile'

const Product = () => {
    const { category } = useScreenSize();

    return (
        <div id="product" className='bg-gray-100 p-4 pb-24'>
            {/* {category} */}
            {Boolean(category === 'xs' || category === 'sm' || category === 'md') ?
                <ProductTableMobile /> : <ProductTable />
            }
            <div className='text-center mt-10'>
                <p className='italic'>**Price and Stock may change at any time **Please contact us to get latest price **Incoterm FOB
                    palembang</p>
            </div>
        </div>
    )
}

export default Product