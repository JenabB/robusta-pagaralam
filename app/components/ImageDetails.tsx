import React from 'react'

interface Props {
    image: any;
    open: boolean;
    onClose: () => void;
}

const ImageDetails = (props: Props) => {
    return (
        <div>
            <div>

            </div>
            <img
                src={props.image}
                alt="image details"
            />
        </div>
    )
}

export default ImageDetails