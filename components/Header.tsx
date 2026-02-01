
import React from 'react';
import { UserRole } from '../types';
import { ICONS } from '../constants';

interface HeaderProps {
  userRole: UserRole;
}

const Header: React.FC<HeaderProps> = ({ userRole }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-8">
      <div className="max-w-md w-full relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <ICONS.Search />
        </span>
        <input 
          type="text" 
          placeholder="Pesquisar por CPF, Nome ou Escola..." 
          className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white sm:text-sm transition-all text-slate-900 font-medium"
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-900">Dr. Ricardo Mendes</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{userRole}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/seed/user/100" alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
