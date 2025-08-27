import React, { useState, useEffect } from 'react';

interface OrderFormModalProps {
    show: boolean;
    onHide: () => void;
    productName: string;
}

interface FormData {
    companyName: string;
    quantity: string;
    unit: string;
    currency: string;
    priceOffer: string;
}

const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
    { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
    { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
    { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
    { code: 'THB', symbol: '฿', name: 'Thai Baht' },
    { code: 'VND', symbol: '₫', name: 'Vietnamese Dong' },
    { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
    { code: 'SEK', symbol: 'kr', name: 'Swedish Krona' },
    { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone' },
    { code: 'DKK', symbol: 'kr', name: 'Danish Krone' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
    { code: 'SAR', symbol: 'ر.س', name: 'Saudi Riyal' },
    { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
    { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
    { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
    { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },
    { code: 'TRY', symbol: '₺', name: 'Turkish Lira' }
];

const units = [
    { code: 'kg', name: 'Kilogram' },
    { code: 'g', name: 'Gram' },
    { code: 'ton', name: 'Ton' },
    { code: 'lb', name: 'Pound' },
    { code: 'oz', name: 'Ounce' },
    { code: 'pcs', name: 'Pieces' },
    { code: 'box', name: 'Box' },
    { code: 'bag', name: 'Bag' },
    { code: 'sack', name: 'Sack' },
    { code: 'pack', name: 'Pack' },
    { code: 'carton', name: 'Carton' },
    { code: 'container', name: 'Container' }
];

const OrderFormModal: React.FC<OrderFormModalProps> = ({ show, onHide, productName }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        quantity: '',
        unit: 'kg',
        currency: 'USD',
        priceOffer: ''
    });

    // Handle modal visibility and animation states
    useEffect(() => {
        if (show) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [show]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleClose = (): void => {
        setIsAnimating(false);
        setTimeout(() => {
            resetForm();
            onHide();
        }, 300);
    };

    const resetForm = (): void => {
        setFormData({
            companyName: '',
            quantity: '',
            unit: 'kg',
            currency: 'USD',
            priceOffer: ''
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Validate required fields
        if (!formData.companyName.trim() || !formData.quantity.trim() || !formData.priceOffer.trim()) {
            alert('Please fill in all required fields');
            return;
        }

        // Get selected options
        const selectedCurrency = currencies.find(c => c.code === formData.currency);
        const selectedUnit = units.find(u => u.code === formData.unit);

        // Create WhatsApp message
        const phoneNumber = '6285368885884';
        const message = `Hello Fazza! I would like to request a quote:

Product: ${productName}
Company: ${formData.companyName}
Quantity: ${formData.quantity} ${selectedUnit?.code}
Offering Price: ${selectedCurrency?.symbol}${formData.priceOffer} (${formData.currency})

Could you please provide your best price for this quantity? Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Close modal with animation
        handleClose();
    };

    // Get current selections for preview
    const selectedCurrency = currencies.find(c => c.code === formData.currency);
    const selectedUnit = units.find(u => u.code === formData.unit);

    // Don't render if modal is not visible
    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-0'
            }`}>
            {/* Backdrop with fade animation */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isAnimating ? 'bg-opacity-40' : 'bg-opacity-0'
                    }`}
                onClick={handleClose}
            />

            {/* Modal container with scale and slide animation */}
            <div className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-sm transition-all duration-300 ease-in-out transform ${isAnimating
                    ? 'scale-100 translate-y-0 opacity-100'
                    : 'scale-90 -translate-y-8 opacity-0'
                }`}>
                {/* Modal Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800">Request Quote</h3>
                    <button
                        onClick={handleClose}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
                        type="button"
                    >
                        <span className="text-xl leading-none">×</span>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-5">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Product Name - Read Only */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product
                            </label>
                            <input
                                type="text"
                                value={productName}
                                disabled
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 font-medium text-sm cursor-not-allowed"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Company Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Enter your company name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#545C36] focus:border-transparent transition-all duration-200 text-sm"
                            />
                        </div>

                        {/* Quantity with Unit Selector */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Quantity <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    placeholder="Enter quantity"
                                    min="0.1"
                                    step="0.1"
                                    required
                                    className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#545C36] focus:border-transparent transition-all duration-200 text-sm"
                                />

                                {/* Unit Selector - positioned absolutely */}
                                <select
                                    name="unit"
                                    value={formData.unit}
                                    onChange={handleInputChange}
                                    className="absolute right-0 top-0 h-full px-3 bg-transparent border-0 rounded-r-xl focus:outline-none text-sm font-medium text-gray-600 cursor-pointer appearance-none"
                                    style={{ paddingRight: '2rem' }}
                                >
                                    {units.map((unit) => (
                                        <option key={unit.code} value={unit.code}>
                                            {unit.code}
                                        </option>
                                    ))}
                                </select>

                                {/* Custom dropdown arrow */}
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Unit Preview */}
                            <div className="mt-2 text-xs text-gray-500 font-medium">
                                Unit: <span className="text-[#545C36] font-bold">
                                    {selectedUnit?.name || 'Kilogram'}
                                </span>
                            </div>
                        </div>

                        {/* Price Offer with Currency Selector */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Your Offer Price <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                {/* Currency Selector - positioned absolutely on left */}
                                <select
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleInputChange}
                                    className="absolute left-0 top-0 h-full pl-4 pr-8 bg-transparent border-0 rounded-l-xl focus:outline-none text-sm font-medium text-gray-600 cursor-pointer appearance-none z-10"
                                >
                                    {currencies.map((currency) => (
                                        <option key={currency.code} value={currency.code}>
                                            {currency.symbol} {currency.code}
                                        </option>
                                    ))}
                                </select>

                                {/* Custom dropdown arrow for currency */}
                                <div className="absolute left-20 top-1/2 transform -translate-y-1/2 pointer-events-none z-20">
                                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Price Input */}
                                <input
                                    type="text"
                                    name="priceOffer"
                                    value={formData.priceOffer}
                                    onChange={handleInputChange}
                                    placeholder="100,000"
                                    required
                                    className="w-full pl-28 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#545C36] focus:border-transparent transition-all duration-200 text-sm"
                                />
                            </div>

                            {/* Price Preview */}
                            <div className="mt-2 text-xs text-gray-500 font-medium">
                                Preview: <span className="text-[#545C36] font-bold">
                                    {selectedCurrency?.symbol}{formData.priceOffer || '0'} ({formData.currency})
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-semibold text-sm transition-all duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3 px-4 bg-[#545C36] text-white rounded-xl hover:bg-[#4a5230] font-semibold text-sm transition-all duration-200 transform hover:scale-105"
                            >
                                Request Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderFormModal;