
import React from 'react';
import { OrderItem } from '../types';

interface OrderCartProps {
    cartItems: OrderItem[];
    total: string;
    onUpdateQuantity: (itemId: number, quantity: number) => void;
    onRemoveItem: (itemId: number) => void;
    onCheckout: () => void;
}

const OrderCart: React.FC<OrderCartProps> = ({ cartItems, total, onUpdateQuantity, onRemoveItem, onCheckout }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg sticky top-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Your Order</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-400">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                     <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                                        className="w-16 bg-gray-700 text-white rounded-md p-1 text-center"
                                    />
                                    <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-400">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 border-t border-gray-700 pt-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                            <span className="text-white">Total:</span>
                            <span className="text-amber-400">${total}</span>
                        </div>
                        <button
                            onClick={onCheckout}
                            disabled={cartItems.length === 0}
                            className="w-full mt-4 bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                        >
                            Place Order
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default OrderCart;
