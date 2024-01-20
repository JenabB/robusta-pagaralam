import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
    // const handleWhatsAppClick = () => {
    //     const whatsappUrl = 'https://api.whatsapp.com/send?phone=628123456789';
    //     window.open(whatsappUrl, '_blank');
    // };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '50px',
                right: '60px',
                backgroundColor: '#25D366',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
            }}
        // onClick={handleWhatsAppClick}
        >
            <FaWhatsapp size={30} color="#fff" />
        </div>
    );
};

export default FloatingWhatsAppButton;