import React from 'react'
import { styles } from './gridStyles'
const FazzaGrid = () => {

    const images = [
        '/images/grid/1.webp', '/images/grid/2.webp',
        '/images/grid/3.webp', '/images/grid/4.webp',
        '/images/grid/5.webp', '/images/grid/6.webp',
        '/images/grid/7.webp', '/images/grid/8.webp',

    ]

    const randomSize = () => {
        const randomNumber = Math.random() * 100; // Generate random number between 0 and 100

        if (randomNumber < 40) {
            return 'small'; // 40% probability for 'small'
        } else if (randomNumber < 75) {
            return 'medium'; // 35% probability for 'medium'
        } else {
            return 'large'; // 25% probability for 'large'
        }
    };

    return (
        <div className='w-full'>
            <div style={{ ...styles.pin_container }}>
                {images.map((im, idx) => <div key={idx} style={{
                    ...styles.card, ...styles[randomSize()]
                }}>
                    <img src={im} alt="grid" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>)}
            </div>
        </div>
    )
}

export default FazzaGrid