import React, { useEffect } from 'react'

interface Props {
    image: any;
    open: boolean;
    onClose: () => void;
}

const ImageDetails = ({ open, onClose, image }: Props) => {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    if (!open) return null;

    return (
        <>
            {/* Backdrop dengan animasi fade */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
                onClick={onClose}
            />

            {/* Modal dengan animasi scale dan fade */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="bg-white rounded-lg shadow-xl max-w-lg w-full transform transition-all duration-300 ease-in-out
                    animate-modal-appear"
                >
                    {/* Image Container */}
                    <div className="relative">
                        <img
                            src={image}
                            alt="Modal image"
                            className="w-full h-auto rounded-t-lg"
                        />

                        {/* Close button dengan animasi hover */}
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 bg-white rounded-full p-2 
                            hover:bg-gray-100 transition-colors duration-200 
                            hover:scale-110 transform"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageDetails;