
import React, { useState, useMemo } from 'react';
import { User, UserRole, OrderItem, MenuItem } from './types';
import { GUEST_USER } from './constants';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import MenuView from './components/MenuView';
import CustomerView from './components/CustomerView';
import ManagerView from './components/ManagerView';
import OrderCart from './components/OrderCart';

type AppView = 'menu' | 'customer' | 'manager';

export default function App() {
    const [currentUser, setCurrentUser] = useState<User>(GUEST_USER);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [cart, setCart] = useState<OrderItem[]>([]);
    const [currentView, setCurrentView] = useState<AppView>('menu');

    const handleLogin = (user: User) => {
        setCurrentUser(user);
        if(user.role === UserRole.CUSTOMER) setCurrentView('menu');
        if(user.role === UserRole.MANAGER) setCurrentView('manager');
        setLoginOpen(false);
    };

    const handleLogout = () => {
        setCurrentUser(GUEST_USER);
        setCurrentView('menu');
        setCart([]);
    };
    
    const addToCart = (itemToAdd: MenuItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...itemToAdd, quantity: 1 }];
        });
    };
    
    const removeFromCart = (itemId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId: number, quantity: number) => {
        if(quantity <= 0) {
            removeFromCart(itemId);
        } else {
            setCart(prevCart => prevCart.map(item => item.id === itemId ? {...item, quantity} : item));
        }
    };

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }, [cart]);

    const renderView = () => {
        switch (currentView) {
            case 'customer':
                return <CustomerView user={currentUser} />;
            case 'manager':
                return <ManagerView />;
            case 'menu':
            default:
                return <MenuView onAddToCart={addToCart} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
            <Header
                user={currentUser}
                cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
                onLoginClick={() => setLoginOpen(true)}
                onLogoutClick={handleLogout}
                onSetView={setCurrentView}
                currentView={currentView}
            />
            <main className="p-4 md:p-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {renderView()}
                    </div>
                    <div className="lg:col-span-1">
                        <OrderCart 
                            cartItems={cart} 
                            total={cartTotal}
                            onUpdateQuantity={updateQuantity}
                            onRemoveItem={removeFromCart}
                            onCheckout={() => {
                                alert('Order placed successfully! (simulation)');
                                setCart([]);
                            }}
                        />
                    </div>
                </div>
            </main>
            {isLoginOpen && (
                <LoginModal
                    onClose={() => setLoginOpen(false)}
                    onLogin={handleLogin}
                />
            )}
        </div>
    );
}
