
'use client'
import { FaWhatsapp } from 'react-icons/fa';
import useScreenSize from '../hooks/useScreenSize';

const WhatsAppButton = () => {
    const { category } = useScreenSize()
    const handleWhatsAppClick = () => {
        const whatsappUrl = 'https://api.whatsapp.com/send?phone=6287813120666';
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            onClick={handleWhatsAppClick}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                backgroundColor: '#25D366',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 2000
            }}
        >
            <FaWhatsapp size={category !== 'lg' ? 40 : 50} color="#fff" />
        </div>
    );
};

export default WhatsAppButton;