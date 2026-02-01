
import React from 'react';
import { Student } from './types';

export const MOCK_STUDENTS: Student[] = [
  {
    cpf: '123.456.789-01',
    name: 'João Silva (Anônimo)',
    isRevealed: false,
    school: 'E.M. Olavo Bilac',
    attendance: 42,
    ubsStatus: 'Alert',
    risk: 'Critical',
    age: 14,
    vulnerabilityScore: 9.2,
    alerts: [
      { id: '1', date: '2023-10-15', type: 'Falta Consecutiva', description: 'O aluno não comparece há 5 dias.', category: 'Attendance' },
      { id: '2', date: '2023-10-12', type: 'UBS Alerta', description: 'Vacinação em atraso detectada via sistema integrado.', category: 'Health' }
    ]
  },
  {
    cpf: '234.567.890-12',
    name: 'Maria Oliveira (Anônimo)',
    isRevealed: false,
    school: 'C.E. Marechal Rondon',
    attendance: 95,
    ubsStatus: 'Synchronized',
    risk: 'Low',
    age: 12,
    vulnerabilityScore: 1.5,
    alerts: []
  },
  {
    cpf: '345.678.901-23',
    name: 'Carlos Santos (Anônimo)',
    isRevealed: false,
    school: 'E.M. Olavo Bilac',
    attendance: 58,
    ubsStatus: 'Pending',
    risk: 'High',
    age: 15,
    vulnerabilityScore: 6.8,
    alerts: [
      { id: '3', date: '2023-10-14', type: 'Baixo Rendimento', description: 'Queda súbita nas notas de Matemática.', category: 'Behavioral' }
    ]
  },
  {
    cpf: '456.789.012-34',
    name: 'Beatriz Costa (Anônimo)',
    isRevealed: false,
    school: 'C.E. Marechal Rondon',
    attendance: 35,
    ubsStatus: 'Alert',
    risk: 'Critical',
    age: 13,
    vulnerabilityScore: 8.9,
    alerts: [
      { id: '4', date: '2023-10-16', type: 'Evasão Iminente', description: 'Contato telefônico sem sucesso com os responsáveis.', category: 'Attendance' },
      { id: '5', date: '2023-10-10', type: 'Acompanhamento UBS', description: 'Consulta de pré-adolescente agendada e faltosa.', category: 'Health' }
    ]
  },
  {
    cpf: '567.890.123-45',
    name: 'Gabriel Almeida (Anônimo)',
    isRevealed: false,
    school: 'E.M. Monteiro Lobato',
    attendance: 78,
    ubsStatus: 'Synchronized',
    risk: 'Medium',
    age: 11,
    vulnerabilityScore: 4.2,
    alerts: []
  }
];

export const ICONS = {
  Layout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Logout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Print: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  )
};
