import React from 'react'

const Payment = () => {
    const payments = [
        { name: "BNI", logo: "/images/BNI.png" }
    ];
    return (
        <div className='bg-teal-100 p-4 text-center lg:flex lg:justify-between items-center' >
            <div>
                <h1 className=' font-poppins mb-0'>SECURE SHOPPING</h1>
                <h1 className='font-semibold font-poppins'>WITH FAZZA INDO OMAIRA</h1>
            </div>
            <div className='my-6'>
                <p className='font-poppins text-sm '>We provide the most secure
                    online shopping experience with us.</p>
            </div>
            <div className='xs:mt-12 flex justify-center'>
                {payments.map((p, i) => <img src={p.logo} alt="payment" style={{ width: '150px' }} />)}
            </div>
        </div>
    )
}

export default Payment