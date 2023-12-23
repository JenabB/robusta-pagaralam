import React from 'react';
import header from '../../assets/images/header.png';

const Header = () => {
    return (
        <div
            style={{
                height: '600px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(https://i.ibb.co/0rYfhNG/header.png)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='font-bold text-center text-white' style={{ fontSize: '40px' }}>
                <h1>ROBUSTA COFFEE</h1>
                <p>from Pagaralam</p>
            </div>
        </div>
    );
}

export default Header;