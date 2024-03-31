import React, { useState } from 'react'
import tea from "@/app/data/tea.json"
import formattedDollar from '../utils/formattedDollar'
import SpecModal from './SpecModal'
const ProductHighlight = () => {
    const [showDensity, setShowDensity] = useState(false)
    const [showComposition, setShowComposition] = useState(false);

    const handleWhatsAppClick = (text: string) => {
        const whatsappUrl = 'https://api.whatsapp.com/send?phone=6287813120666';
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div>
            <div >
                {tea.tea.map((item, index) => <div key={index}>
                    <div>

                        <div className='grid xs:grid-cols-1 lg:grid-cols-2'>
                            <div>
                                <img src={item.image} />
                            </div>
                            <div className=''>
                                <hr className='mb-4' />
                                <div className='p-8 pt-0'>
                                    <h1 className='font-bold text-xl uppercase font-sans'>{item.name}</h1>
                                    <p className='mt-4 font-edu text-xl'>
                                        {item.description}
                                    </p>
                                    <hr className='mt-4' />
                                    {Boolean(item.specs.standard_density.length) && <p className='font-bold' onClick={() => setShowDensity(!showDensity)}><u>Show density</u></p>}
                                    {Boolean(item.specs.standard_density.length) && showDensity && <div>
                                        <table className='w-full'>
                                            <thead>
                                                <tr className='font-bold text-center'>
                                                    <th className='px-4 py-2'>GRADE</th>
                                                    <th className='px-4 py-2'>NORMA</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.specs.standard_density.map((item, index) => (
                                                    <tr key={index} className='text-center'>
                                                        <td className='border px-4'>{item.name}</td>
                                                        <td className='border px-4 '>{item.norma}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>}
                                    {Boolean(item.specs.composition.length) && <p className='font-bold' onClick={() => setShowComposition(!showComposition)}><u>Show composition</u></p>}
                                    {Boolean(item.specs.composition.length) && showComposition && <div>
                                        <table className='w-full'>
                                            <thead>
                                                <tr className='font-bold text-center'>
                                                    <th className='px-4'>TYPE</th>
                                                    <th className='px-4'>COMPOSITION</th>
                                                    <th className='px-4'>KG</th>
                                                    <th className='px-4'>%</th>
                                                    <th className='px-4'>WEIGHT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.specs.composition.map((item, index) => (
                                                    <tr key={index} className='text-center'>
                                                        <td className='border px-4'>{item.type}</td>
                                                        <td className='border px-4 '>{item.comp}</td>
                                                        <td className='border px-4'>{item.kg}</td>
                                                        <td className='border px-4 '>{item.percen}</td>
                                                        <td className='border px-4'>{item.weight}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>}
                                    {/* <p className='mt-4 font-semibold' onClick={() => setIsOpen(true)}><u>Check product specification</u></p>
                                    <SpecModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={item.specs} /> */}

                                    <div className='mt-4 font-bold'>
                                        <p><span className='font-normal'>Price</span>: {formattedDollar(item.price)}</p>
                                    </div>
                                </div>
                                {/* <div className='p-8 bg-amber-100'>
                                <p className='font-bold mb-2'>Effects and Benefits</p>
                                <ul>
                                    {item.benefits.map((b, idx) => <li key={idx} className='font-edu text-xl'><b>{idx + 1}.</b> {b}</li>)}
                                </ul>
                            </div> */}

                                <div>
                                    <div className='text-center mt-4 mb-14'>
                                        <button className='px-12 py-2 bg-black text-white rounded-full' onClick={() => handleWhatsAppClick(item.shop_text)}>SHOP NOW</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>)
                }
            </div >
        </div >
    )
}

export default ProductHighlight