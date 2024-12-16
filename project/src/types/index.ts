export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  phone?: string;
}

export interface Reservation {
  id: string;
  userId: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  numberOfGuests: number;
}

export interface MaintenanceTask {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: string;
}

export interface ChemicalInventory {
  id: string;
  name: string;
  currentLevel: number;
  minimumLevel: number;
  unit: string;
  lastUpdated: string;
}