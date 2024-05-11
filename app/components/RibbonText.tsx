import React from 'react';
import Slider from 'react-slick';

const RibbonText = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
    };

    const data = [
        'Green Tea starting from $10.14 for Canada', 'CTC Black Tea starting from $4.63 for Canada', 'Negotible local shipping! E-mail us for orders'
    ];

    return (
        <div style={{ backgroundColor: '#AF976E' }}>
            <div>
                <Slider {...settings}>
                    {data.map((content, index) => {
                        return (
                            <div

                                key={index}
                                className="flex justify-center"
                            >
                                <p className='text-center text-white my-2 text-xs'>{content}</p>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default RibbonText