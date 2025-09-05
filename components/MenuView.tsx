
import React from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';

interface MenuItemCardProps {
    item: MenuItem;
    onAddToCart: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img className="w-full h-48 object-cover" src={item.imageUrl} alt={item.name} />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-400">${item.price.toFixed(2)}</span>
                    <button
                        onClick={() => onAddToCart(item)}
                        className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

interface MenuViewProps {
    onAddToCart: (item: MenuItem) => void;
}

const MenuView: React.FC<MenuViewProps> = ({ onAddToCart }) => {
    const categories = [...new Set(MENU_ITEMS.map(item => item.category))];

    return (
        <div>
            <h1 className="text-4xl font-bold text-white mb-8 border-b-2 border-amber-500 pb-2">Our Menu</h1>
            {categories.map(category => (
                <div key={category} className="mb-12">
                    <h2 className="text-2xl font-semibold text-amber-400 mb-6">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {MENU_ITEMS.filter(item => item.category === category).map(item => (
                            <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuView;
