
import React from 'react';
import { User } from '../types';
import { CUSTOMER_USER, MANAGER_USER } from '../constants';
import { UserIcon } from '../constants';


interface LoginModalProps {
    onClose: () => void;
    onLogin: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-sm w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-500">
                        <UserIcon />
                    </div>
                    <h3 className="mt-4 text-lg leading-6 font-medium text-white">Select Your Role</h3>
                    <p className="mt-2 text-sm text-gray-400">
                        This is a simulation. Choose a role to explore the application's features.
                    </p>
                </div>
                <div className="mt-8 space-y-4">
                    <button
                        onClick={() => onLogin(CUSTOMER_USER)}
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Login as Customer
                    </button>
                    <button
                        onClick={() => onLogin(MANAGER_USER)}
                        className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Login as Manager
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
