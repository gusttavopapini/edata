
export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';
export type UBSStatus = 'Synchronized' | 'Pending' | 'Alert';

export interface Alert {
  id: string;
  date: string;
  type: string;
  description: string;
  category: 'Attendance' | 'Health' | 'Behavioral';
}

export interface Student {
  cpf: string;
  name: string;
  isRevealed: boolean;
  school: string;
  attendance: number; // 0 to 100
  ubsStatus: UBSStatus;
  risk: RiskLevel;
  age: number;
  vulnerabilityScore: number; // 0 to 10
  alerts: Alert[];
}

export type ViewState = 'login' | 'dashboard' | 'active-search' | 'admin';
export type UserRole = 'Admin' | 'Professional';
