import React from 'react';
import tea from '@/app/data/tea.json';

const ProductHighlight = () => {


    const handleBuyNowClick = (product: string) => {
        const phoneNumber = '6287813120666';
        const message = `Hello Fazza! i want to order ${product}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div style={{ backgroundColor: '#FEFAEF' }}>
            <div>
                <hr className="mb-4" />
                <div className='lg:grid lg:grid-cols-2'>
                    {tea.tea.map((item, index) => (
                        <div key={index}>
                            <div className="p-4 mb-10">
                                <div className=" pt-0">
                                    <h1 className="font-bold text-xl text-center uppercase font-poppins">
                                        {item.name}
                                    </h1>
                                    <p className="mt-4 font-poppins text-sm">{item.description}</p>
                                </div>
                                <div className="space-x-4 text-center flex overflow-x-scroll px-4 mt-8">
                                    {item.child.map((x, i) => (
                                        <div key={i}>
                                            <div
                                                className="shadow-xl rounded-b-md"
                                                style={{ width: '250px' }}
                                            >
                                                <img
                                                    className="rounded-t-lg"
                                                    src={x.image}
                                                    style={{
                                                        height: '200px',
                                                        width: '250px',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <div className="px-2 pb-2 bg-slate-100">
                                                    <div className="flex justify-between items-center">
                                                        <p className="p-2 font-poppins font-bold text-sm">
                                                            {x.name}
                                                        </p>
                                                        <button
                                                            className="px-4 mt-2 py-2 bg-black text-white rounded-2xl font-bold text-xs"
                                                            onClick={() => handleBuyNowClick(x.name)}
                                                        >
                                                            CHAT NOW
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductHighlight;
