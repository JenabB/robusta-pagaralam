import React from 'react'
import Navbar from '../components/Navbar'
import ProductTable from './ProductTable'

const Product = () => {
    return (
        <div className='bg-gray-400 h-screen'>
            <Navbar />
            <ProductTable />
            <div className='text-center mt-10'>
                <p className='italic'>**Price and Stock may change at any time **Please contact us to get latest price **Incoterm FOB
                    palembang</p>
            </div>
        </div>
    )
}

export default Product