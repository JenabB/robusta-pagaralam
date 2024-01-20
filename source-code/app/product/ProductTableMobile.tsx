import React from 'react'
import product from '../constants/product';
const ProductTableMobile = () => {

    return (
        <div className="m-2 ">
            {product.map((item, index) => (
                <div key={index} className='bg-white p-4 my-8 rounded-lg'>
                    <div>
                        <h1 className='font-bold'>Product</h1>
                        <p>{item.product}</p>
                    </div>
                    <div className='grid grid-cols-2 mt-4'>
                        <div >
                            <h1 className='font-bold'>Grade</h1>
                            <p>{item.grade}</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>Price</h1>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-400">
                    <tr>
                        <th className="py-2 px-4 border-b">Product</th>
                        <th className="py-2 px-4 border-b">Grade</th>
                        <th className="py-2 px-4 border-b">Price (KG) in USD</th>
                        <th className="py-2 px-4 border-b">Information</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                            <td className="py-2 px-4 border-b">{item.product}</td>
                            <td className="py-2 px-4 border-b text-center">{item.grade}</td>
                            <td className="py-2 px-4 border-b text-center">{item.price}</td>
                            <td className="py-2 px-4 border-b">{item.info}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTableMobile