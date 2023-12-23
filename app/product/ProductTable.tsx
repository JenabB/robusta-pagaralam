import React from 'react';
import product from '../constants/product';

const ProductTable = () => {
    return (
        <div className="w-3/6 mx-auto mt-20">
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border-b">Product</th>
                        <th className="py-2 px-4 border-b">Grade</th>
                        <th className="py-2 px-4 border-b">Price (KG) in USD</th>
                        <th className="py-2 px-4 border-b">Information</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="py-2 px-4 border-b">{item.product}</td>
                            <td className="py-2 px-4 border-b text-center">{item.grade}</td>
                            <td className="py-2 px-4 border-b text-center">{item.price}</td>
                            <td className="py-2 px-4 border-b">{item.info}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;