import React, { useState, FC } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

const SpecModal: FC<ModalProps> = ({ isOpen, onClose, data }) => {
    console.log({ data })

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-md mx-auto my-6">
                        <div className="bg-white rounded-lg shadow-lg">
                            <div className="relative p-6 flex-auto">
                                {data.standard_density.map(((item: any) => <td>{item.name}</td>))}
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default SpecModal;