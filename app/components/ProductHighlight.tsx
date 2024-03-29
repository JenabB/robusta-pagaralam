import React from 'react'
import tea from "@/app/data/tea.json"
import formattedDollar from '../utils/formattedDollar'
const ProductHighlight = () => {

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
                                <div className='p-8'>
                                    <h1 className='font-bold text-xl uppercase font-sans'>{item.name}</h1>
                                    <p className='mt-4 font-edu text-xl'>
                                        {item.description}
                                    </p>
                                    <hr className='mt-4' />
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
                                        <button className='px-12 py-2 bg-black text-white rounded-full'>SHOP NOW</button>
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