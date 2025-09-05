
export enum UserRole {
  GUEST = 'GUEST',
  CUSTOMER = 'CUSTOMER',
  MANAGER = 'MANAGER',
}

export interface User {
  name: string;
  role: UserRole;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface Employee {
  id: number;
  name:string;
  role: string;
  salary: number;
  startDate: string;
}
