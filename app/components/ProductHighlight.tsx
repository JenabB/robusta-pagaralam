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
                                                className="shadow-xl"
                                                style={{ width: '250px' }}
                                            >
                                                <div style={{ position: 'relative', width: '250px', height: '200px' }}>
                                                    <p style={{ bottom: 0, left: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))', }} className='m-0 text-white w-full absolute'>{x.name}</p>
                                                    <img

                                                        src={x.image}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                        }}
                                                        alt={x.name}
                                                    />
                                                </div>
                                                <div className=" bg-slate-100">

                                                    <div className="flex justify-between items-center">

                                                        <button
                                                            style={{ backgroundColor: '#545C36' }}
                                                            className="px-4 w-full py-3 text-white font-bold text-xs"
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
