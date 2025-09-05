
import { MenuItem, Employee, User, UserRole } from './types';

export const GUEST_USER: User = { name: 'Guest', role: UserRole.GUEST };
export const CUSTOMER_USER: User = { name: 'John Doe', role: UserRole.CUSTOMER };
export const MANAGER_USER: User = { name: 'Jane Smith', role: UserRole.MANAGER };

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Wagyu Beef Sliders",
    description: "Three succulent sliders with caramelized onions, aged cheddar, and truffle aioli on a brioche bun.",
    price: 28.00,
    category: "Appetizers",
    imageUrl: "https://picsum.photos/seed/sliders/400/300",
  },
  {
    id: 2,
    name: "Pan-Seared Scallops",
    description: "Jumbo scallops served with a saffron risotto, asparagus tips, and a citrus beurre blanc.",
    price: 32.00,
    category: "Appetizers",
    imageUrl: "https://picsum.photos/seed/scallops/400/300",
  },
  {
    id: 3,
    name: "Filet Mignon",
    description: "8oz center-cut filet, perfectly grilled, served with potato gratin and a red wine reduction sauce.",
    price: 65.00,
    category: "Main Courses",
    imageUrl: "https://picsum.photos/seed/filet/400/300",
  },
  {
    id: 4,
    name: "Lobster Thermidor",
    description: "A classic preparation of rich lobster meat in a creamy brandy sauce, baked in its shell.",
    price: 75.00,
    category: "Main Courses",
    imageUrl: "https://picsum.photos/seed/lobster/400/300",
  },
    {
    id: 5,
    name: "Wild Mushroom Risotto",
    description: "Creamy Arborio rice with a medley of wild mushrooms, parmesan cheese, and white truffle oil.",
    price: 42.00,
    category: "Main Courses",
    imageUrl: "https://picsum.photos/seed/risotto/400/300",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "A decadent molten chocolate cake served with vanilla bean ice cream and raspberry coulis.",
    price: 18.00,
    category: "Desserts",
    imageUrl: "https://picsum.photos/seed/lavacake/400/300",
  },
  {
    id: 7,
    name: "Classic Tiramisu",
    description: "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
    price: 16.00,
    category: "Desserts",
    imageUrl: "https://picsum.photos/seed/tiramisu/400/300",
  },
  {
    id: 8,
    name: "Vintage Cabernet",
    description: "A full-bodied red wine with notes of dark fruit, oak, and a smooth finish.",
    price: 25.00,
    category: "Drinks",
    imageUrl: "https://picsum.photos/seed/wine/400/300",
  },
];

export const EMPLOYEES: Employee[] = [
    { id: 101, name: 'Alice Johnson', role: 'General Manager', salary: 95000, startDate: '2020-01-15' },
    { id: 102, name: 'Robert Brown', role: 'Head Chef', salary: 82000, startDate: '2019-03-22' },
    { id: 103, name: 'Emily Davis', role: 'Front Office Manager', salary: 65000, startDate: '2021-06-01' },
    { id: 104, name: 'Michael Wilson', role: 'Concierge', salary: 48000, startDate: '2022-02-10' },
    { id: 105, name: 'Jessica Miller', role: 'Housekeeping Supervisor', salary: 55000, startDate: '2018-11-05' },
    { id: 106, name: 'David Garcia', role: 'Sous Chef', salary: 60000, startDate: '2021-09-01' },
    { id: 107, name: 'Sarah Martinez', role: 'Event Coordinator', salary: 62000, startDate: '2022-05-20' },
    { id: 108, name: 'James Anderson', role: 'Lead Bartender', salary: 53000, startDate: '2020-08-17' },
];

// SVG Icons (Heroicons)
export const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-6v-1a6 6 0 00-9-5.197" />
    </svg>
);

export const CurrencyDollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.667a1.667 1.667 0 012.5 1.5M12 20v-1.667a1.667 1.667 0 00-2.5-1.5M9 12h6" />
    </svg>
);

export const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm6 0a1 1 0 011 1v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V6h-1a1 1 0 010-2h1V3a1 1 0 011-1zM3 13a1 1 0 011-1h1v1a1 1 0 11-2 0v-1zm1-3a1 1 0 01-1 1v1h1a1 1 0 110 2H3v1a1 1 0 01-2 0v-1H0a1 1 0 010-2h1v-1a1 1 0 011-1zm10-1a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1zM9 7a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V9h-1a1 1 0 110-2h1V7a1 1 0 011-1zm7 4a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);
