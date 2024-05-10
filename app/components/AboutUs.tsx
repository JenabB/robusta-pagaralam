import React from 'react'
import Image from 'next/image'

const AboutUs = () => {

    const companyInfo = [
        { name: 'Company Name', value: 'PT Fazza Indo Omaira' },
        { name: 'Company Type', value: 'Limited Company' },
        { name: 'Address', value: 'Jl. Mayjen S. Parman no 52, 31511 Kota Pagar Alam, Sumatera Selatan, Indonesia' },
        { name: 'Taxpayer register number', value: '50.026.310.8-309.000' },
        { name: 'Company register number', value: 'AHU-056670.AH.01.30' },
        { name: 'Bank Account', value: '11' },
        { name: 'Phone', value: '+62 853-6888-5884' },
        { name: 'Email', value: 'info@fazz-indo-omaira.com' },

    ]


    return (
        <div id='about-us' style={{ backgroundColor: '#AA9F83' }}>

            <div className=''>
                <div className='bg-black text-white p-3 lg:p-8 col-span-2'>
                    <p className='mb-4 p-3 text-justify'>
                        <b> PT Fazza Indo Omaira</b> strives to run its business sustainably
                        As an international trading company, our company is run by
                        expertise and have a team that is committed to serving customers with
                        We obtain quality goods procurement services directly from farmers
                        tall. Therefore, certification is an important element in our journey
                        Towards this, certification plays an important role. information about
                        Our performance and the areas that we need to continue to improve in order to improve
                        increase efficiency and productivity. We also work with partners
                        Our logistics and shipping to ship our products internationally.
                    </p>

                    {/* <p className='mb-4 p-3 text-justify'>
                        One of our current product focuses is Local Tea commodities originating from the city of Pagaralam. Different types of Pagaralam city Tea
                        This robusta is considered to have a superior taste in the form of strong bitter. This unique bitter taste is obtained by Pagaralam Coffee because of the planting location at an altitude of 1,000-1,4000 meters above sea level under the foot of Mount Dempo, Pagaralam City, South Sumatra, which is adjacent to
                        Other types of plants are cloves, cinnamon and petai.
                    </p> */}

                </div>
                <div className='p-4 lg:p-8 grid lg:grid-cols-2'>
                    {companyInfo.map((item, index) =>
                        <div key={index} >
                            <div className='mb-4'>
                                <b>{item.name}</b>
                                <p>{item.value}</p>

                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default AboutUs