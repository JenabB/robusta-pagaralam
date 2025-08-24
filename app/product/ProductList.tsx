import React, { useState } from 'react';

// Type definitions
interface Product {
    name: string;
    englishName: string;
    imageUrl: string;
}

interface Category {
    categoryName: string;
    categorySlug: string;
    products: Product[];
}

interface ProductWithCategory extends Product {
    category: string;
    categoryName: string;
}

type CommoditiesData = {
    [key: string]: Category;
};

type CategoryKey = keyof CommoditiesData | 'all';

const ProductList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

    const indonesianCommodities: CommoditiesData = {
        spices: {
            categoryName: 'Spices (Rempah-rempah)',
            categorySlug: 'spices',
            products: [
                {
                    name: 'Cengkeh',
                    englishName: 'Cloves',
                    imageUrl: '/images/product/spices/cengkeh.webp',
                },
                {
                    name: 'Lada Hitam',
                    englishName: 'Black Pepper',
                    imageUrl: '/images/product/spices/lada-hitam.webp',
                },
                {
                    name: 'Kapulaga',
                    englishName: 'Cardamom',
                    imageUrl: '/images/product/spices/kapulaga.webp',
                },
                {
                    name: 'Pala',
                    englishName: 'Nutmeg',
                    imageUrl: '/images/product/spices/pala.webp',
                },
                {
                    name: 'Lada Putih',
                    englishName: 'White Pepper',
                    imageUrl: '/images/product/spices/lada-putih.webp',
                },
                {
                    name: 'Ketumbar',
                    englishName: 'Coriander',
                    imageUrl: '/images/product/spices/ketumbar.webp',
                },
                {
                    name: 'Kayu Manis',
                    englishName: 'Cinnamon',
                    imageUrl: '/images/product/spices/kayu-manis.webp',
                },
            ],
        },
        'aromatic-herbs': {
            categoryName: 'Aromatic Herbs (Bumbu & Rempah Aromatik)',
            categorySlug: 'aromatic-herbs',
            products: [
                {
                    name: 'Jahe',
                    englishName: 'Ginger',
                    imageUrl: '/images/product/aromatic-herbs/jahe.webp',
                },
                {
                    name: 'Cabe Jawa',
                    englishName: 'Java Pepper',
                    imageUrl: '/images/product/aromatic-herbs/cabe-jawa.webp',
                },
                {
                    name: 'Kunyit',
                    englishName: 'Turmeric',
                    imageUrl: '/images/product/aromatic-herbs/kunyit.webp',
                },
                {
                    name: 'Serai',
                    englishName: 'Lemongrass',
                    imageUrl: '/images/product/aromatic-herbs/serai.webp',
                },
            ],
        },
        'nuts-beans': {
            categoryName: 'Nuts & Beans (Kacang & Biji)',
            categorySlug: 'nuts-beans',
            products: [
                {
                    name: 'Kemiri',
                    englishName: 'Candlenut',
                    imageUrl: '/images/product/nuts-beans/kemiri.webp',
                },
                {
                    name: 'Cocoa Bean',
                    englishName: 'Cocoa Bean',
                    imageUrl: '/images/product/nuts-beans/cocoa-bean.webp',
                },
            ],
        },
        'coconut-products': {
            categoryName: 'Coconut Products (Produk Kelapa)',
            categorySlug: 'coconut-products',
            products: [
                {
                    name: 'Kelapa',
                    englishName: 'Coconut',
                    imageUrl: '/images/product/coconut-products/kelapa.webp',
                },
                {
                    name: 'Kopra',
                    englishName: 'Copra',
                    imageUrl: '/images/product/coconut-products/kopra.webp',
                },
            ],
        },
        'palm-oil-products': {
            categoryName: 'Palm Oil Products (Produk Kelapa Sawit)',
            categorySlug: 'palm-oil-products',
            products: [
                {
                    name: 'CPO',
                    englishName: 'Crude Palm Oil',
                    imageUrl: '/images/product/palm-oil-products/cpo.webp',
                },
                {
                    name: 'Bungkil Sawit',
                    englishName: 'Palm Kernel Meal',
                    imageUrl: '/images/product/palm-oil-products/bungkil-sawit.webp',
                },
            ],
        },
        'other-commodities': {
            categoryName: 'Other Commodities (Komoditas Lainnya)',
            categorySlug: 'other-commodities',
            products: [
                {
                    name: 'Pinang',
                    englishName: 'Areca Nut',
                    imageUrl: '/images/product/other-commodities/pinang.webp',
                },
            ],
        },
    };

    // Get all products for display
    const getAllProducts = (): ProductWithCategory[] => {
        const allProducts: ProductWithCategory[] = [];
        Object.entries(indonesianCommodities).forEach(([categoryKey, category]) => {
            category.products.forEach((product: Product) => {
                allProducts.push({
                    ...product,
                    category: categoryKey,
                    categoryName: category.categoryName
                });
            });
        });
        return allProducts;
    };

    const filteredProducts: ProductWithCategory[] = selectedCategory === 'all'
        ? getAllProducts()
        : indonesianCommodities[selectedCategory as string]?.products.map((product: Product) => ({
            ...product,
            category: selectedCategory as string,
            categoryName: indonesianCommodities[selectedCategory as string].categoryName
        })) || [];

    interface ProductCardProps {
        product: ProductWithCategory;
    }

    const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
        <div className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-200 overflow-hidden group">
            <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                    src={product.imageUrl}
                    alt={product.englishName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop&crop=center`;
                    }}
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                    {product.englishName}
                </p>
                <button
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-200"
                    onClick={() => {
                        const message = `Hello Fazza! I want to ask about ${product.englishName}`;
                        const whatsappUrl = `https://wa.me/6285368885884?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                    }}
                >
                    Chat Now
                </button>
            </div>
        </div>
    );

    const handleCategoryChange = (category: CategoryKey): void => {
        setSelectedCategory(category);
    };

    return (
        <div className="min-h-screen bg-white">
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            {/* Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Indonesian Commodities
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Premium quality spices, herbs, and agricultural products
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2 md:flex-wrap md:justify-center md:overflow-visible">
                        <button
                            onClick={() => handleCategoryChange('all')}
                            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${selectedCategory === 'all'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All ({getAllProducts().length})
                        </button>
                        {Object.entries(indonesianCommodities).map(([key, category]) => (
                            <button
                                key={key}
                                onClick={() => handleCategoryChange(key as CategoryKey)}
                                className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${selectedCategory === key
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.categoryName.split(' (')[0]} ({category.products.length})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {filteredProducts.map((product: ProductWithCategory, index: number) => (
                        <ProductCard key={`${product.category}-${index}`} product={product} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-4xl text-gray-400 mb-4">📦</div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No products found
                        </h3>
                        <p className="text-gray-500">
                            Try selecting a different category
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;