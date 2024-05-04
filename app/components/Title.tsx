import React from 'react';

interface Props {
    text: string
};

const Title = (props: Props) => {
    return (
        <div className='text-center mb-18'>
            <h1 className='text-3xl font-poppins uppercase font-bold'>{props.text}</h1>
        </div>
    )
}

export default Title