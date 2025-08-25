import React, { useState } from 'react';
import tea from '@/app/data/tea.json';
import Slider from 'react-slick';
import ImageDetails from './ImageDetails';

const ProductHighlight = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                    {/* Left Side - Coffee Section */}
                    <div className="p-4 mb-10">
                        <div className="pt-0">
                            <h1 className="font-bold text-xl text-center uppercase font-poppins">
                                Pagar Alam Robusta Coffee
                            </h1>
                            <p className="mt-4 font-poppins text-sm">
                                Pagar Alam Robusta Coffee is a premium coffee sourced from the highlands of South Sumatera.
                                Characterized by its strong flavor, full body, and distinctive aroma, this coffee features
                                low acidity and balanced bitterness. Grown at an altitude of 700-1500 meters above sea level
                                under ideal climate conditions, it delivers a unique taste profile and exceptional quality.
                            </p>
                            <p className="mt-4 font-poppins text-sm hidden lg:block">
                                Our coffee beans undergo traditional processing methods that have been passed down through
                                generations of local farmers. The volcanic soil of the Pagar Alam region provides natural
                                nutrients that enhance the coffee's richness and complexity. Each bean is carefully hand-picked
                                at optimal ripeness, then sun-dried using traditional methods to preserve its natural oils
                                and aromatic compounds, resulting in a cup that truly captures the essence of South Sumatran
                                coffee heritage.
                            </p>
                            <p className="mt-4 font-poppins text-sm hidden lg:block">
                                Whether you prefer it as a morning energizer or an afternoon pick-me-up, Pagar Alam Robusta
                                Coffee delivers consistent quality and satisfaction in every cup. Its robust flavor profile
                                makes it perfect for espresso-based drinks, while its smooth finish ensures an enjoyable
                                black coffee experience. Supporting local farmers and sustainable farming practices, this
                                coffee represents not just exceptional taste, but also a commitment to environmental
                                responsibility and community development.
                            </p>
                        </div>

                        {/* Coffee Image and Details */}
                        <div className="mt-8 flex justify-center">
                            <div className="shadow-xl" style={{ width: '300px' }}>
                                <div
                                    onClick={() => {
                                        setOpen(true);
                                        setSelectedImage('/images/product/coffee/coffee.webp'); // Ganti dengan path gambar kopi yang sesuai
                                    }}
                                >
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '250px',
                                            objectFit: 'cover',
                                        }}
                                        src="/images/product/coffee/coffee.webp" // Ganti dengan path gambar kopi yang sesuai
                                        alt="Kopi Robusta Pagar Alam"
                                    />
                                </div>

                                <div className='px-4 py-4'>
                                    <div className="flex justify-between items-center">
                                        <p className='font-bold text-md' style={{ color: '#545C36' }}>
                                            Robusta Premium
                                        </p>
                                        <button
                                            style={{ backgroundColor: '#545C36' }}
                                            className="px-4 py-2 w-1/2 text-white font-bold text-xs rounded-2xl"
                                            onClick={() => handleBuyNowClick('Kopi Robusta Pagar Alam')}
                                        >
                                            CHAT NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Tea Section */}
                    <div className="flex flex-col">
                        {tea.tea.map((item, index) => (
                            <div key={index}>
                                <div className="p-4 mb-10">
                                    <div className="pt-0">
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
                                                                    onClick={() => {
                                                                        setOpen(true);
                                                                        setSelectedImage(content)
                                                                    }}
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
            <ImageDetails image={selectedImage} open={open} onClose={() => {
                setOpen(false)
                setSelectedImage(null)
            }} />
        </div>
    );
};

export default ProductHighlight;