
import React from 'react';
import { User } from '../types';

interface CustomerViewProps {
    user: User;
}

const CustomerView: React.FC<CustomerViewProps> = ({ user }) => {
    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back, {user.name}!</h1>
            <p className="text-amber-400 mb-8">Your Customer Profile</p>

            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Account Details</h2>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <p><span className="font-semibold text-gray-300">Name:</span> {user.name}</p>
                        <p><span className="font-semibold text-gray-300">Email:</span> johndoe@example.com (mock)</p>
                        <p><span className="font-semibold text-gray-300">Member Since:</span> Jan 1, 2023 (mock)</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Recent Orders (mock data)</h2>
                     <div className="bg-gray-700 p-4 rounded-lg space-y-3">
                        <div className="flex justify-between items-center">
                           <p>Order #12034 - Filet Mignon, Vintage Cabernet</p>
                           <span className="font-bold text-amber-400">$90.00</span>
                        </div>
                         <div className="flex justify-between items-center">
                           <p>Order #11987 - Pan-Seared Scallops</p>
                           <span className="font-bold text-amber-400">$32.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerView;
