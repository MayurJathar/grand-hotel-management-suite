
import React, { useState } from 'react';
import { EMPLOYEES } from '../constants';
import { generateRoleDescription } from '../services/geminiService';
import { UsersIcon, CurrencyDollarIcon, SparklesIcon } from '../constants';
import { Employee } from '../types';

type ManagerTab = 'employees' | 'payroll';

const EmployeeList: React.FC<{onGenerateDescription: (role:string) => void}> = ({onGenerateDescription}) => (
    <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
                <tr className="bg-gray-700">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Start Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
                {EMPLOYEES.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{emp.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{emp.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{emp.startDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button onClick={() => onGenerateDescription(emp.role)} className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300">
                                <SparklesIcon /> AI Role Description
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PayrollList: React.FC = () => (
     <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
                <tr className="bg-gray-700">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Annual Salary</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Monthly Pay</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
                {EMPLOYEES.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{emp.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{emp.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${emp.salary.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-bold">${(emp.salary / 12).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="mt-6 text-right">
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">Process All Payments</button>
        </div>
    </div>
);


const RoleDescriptionModal: React.FC<{ role: string; description: string; isLoading: boolean; onClose: () => void; }> = ({ role, description, isLoading, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl w-full relative">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">AI-Generated Description: {role}</h3>
            {isLoading ? (
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto"></div>
                    <p className="mt-4 text-gray-300">Generating description...</p>
                </div>
            ) : (
                <p className="text-gray-200 whitespace-pre-wrap">{description}</p>
            )}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    </div>
);


const ManagerView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ManagerTab>('employees');
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ role: '', description: '', isLoading: false });
    
    const handleGenerateDescription = async (role: string) => {
        setModalContent({ role, description: '', isLoading: true });
        setModalOpen(true);
        const desc = await generateRoleDescription(role);
        setModalContent({ role, description: desc, isLoading: false });
    };

    const TabButton: React.FC<{ tabName: ManagerTab; label: string; icon: React.ReactNode }> = ({ tabName, label, icon }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                activeTab === tabName
                    ? 'bg-gray-800 text-amber-400 border-b-2 border-amber-400'
                    : 'text-gray-400 hover:text-white'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div>
            <h1 className="text-4xl font-bold text-white mb-8 border-b-2 border-amber-500 pb-2">Manager Dashboard</h1>
            <div className="flex border-b border-gray-700 mb-6">
                <TabButton tabName="employees" label="Employees" icon={<UsersIcon />} />
                <TabButton tabName="payroll" label="Payroll" icon={<CurrencyDollarIcon />} />
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-inner">
                {activeTab === 'employees' && <EmployeeList onGenerateDescription={handleGenerateDescription} />}
                {activeTab === 'payroll' && <PayrollList />}
            </div>
            
            {isModalOpen && <RoleDescriptionModal {...modalContent} onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default ManagerView;
