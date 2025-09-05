
import React from 'react';
import { User, UserRole } from '../types';
import { ShoppingCartIcon } from '../constants';

interface HeaderProps {
    user: User;
    cartItemCount: number;
    onLoginClick: () => void;
    onLogoutClick: () => void;
    onSetView: (view: 'menu' | 'customer' | 'manager') => void;
    currentView: string;
}

const NavItem: React.FC<{
  label: string;
  view: 'menu' | 'customer' | 'manager';
  currentView: string;
  onClick: (view: 'menu' | 'customer' | 'manager') => void;
}> = ({ label, view, currentView, onClick }) => (
    <button
        onClick={() => onClick(view)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            currentView === view
                ? 'bg-amber-500 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
    >
        {label}
    </button>
);


const Header: React.FC<HeaderProps> = ({ user, cartItemCount, onLoginClick, onLogoutClick, onSetView, currentView }) => {
    return (
        <header className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-white">Grand Hotel Suite</span>
                        <nav className="hidden md:flex items-center space-x-4 ml-10">
                           <NavItem label="Menu" view="menu" currentView={currentView} onClick={onSetView} />
                            {user.role === UserRole.CUSTOMER && (
                                <NavItem label="My Profile" view="customer" currentView={currentView} onClick={onSetView} />
                            )}
                            {user.role === UserRole.MANAGER && (
                                <NavItem label="Manager Dashboard" view="manager" currentView={currentView} onClick={onSetView} />
                            )}
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <ShoppingCartIcon />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </div>
                        {user.role === UserRole.GUEST ? (
                            <button
                                onClick={onLoginClick}
                                className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors"
                            >
                                Login
                            </button>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-300 text-sm">Welcome, {user.name}</span>
                                <button
                                    onClick={onLogoutClick}
                                    className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
