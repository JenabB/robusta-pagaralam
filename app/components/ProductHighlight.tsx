import React from 'react';
import tea from '@/app/data/tea.json';
import Slider from 'react-slick';

const ProductHighlight = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
    };

    const handleBuyNowClick = (product: string) => {
        const phoneNumber = '6285368885884';
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

                                                <Slider {...settings}>
                                                    {x.images.map((content, index) => {
                                                        return (
                                                            <div
                                                                key={index}

                                                            >
                                                                <img style={{
                                                                    width: '100%',
                                                                    height: '220px',
                                                                    objectFit: 'cover',
                                                                }} src={content} />
                                                            </div>
                                                        );
                                                    })}
                                                </Slider>

                                                <div className='px-4'>

                                                    <div className="flex justify-between items-center">
                                                        <p className='font-bold text-md' style={{ color: '#545C36' }}>{x.name}</p>
                                                        <button
                                                            style={{ backgroundColor: '#545C36' }}
                                                            className="px-4 py-2 w-1/2 text-white font-bold text-xs rounded-2xl"
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
