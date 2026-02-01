
import React from 'react';
import { ViewState, UserRole } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  activeView: ViewState;
  onViewChange: (view: ViewState) => void;
  onLogout: () => void;
  userRole: UserRole;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange, onLogout, userRole }) => {
  const NavLink: React.FC<{ view: ViewState; label: string; icon: React.ReactNode; disabled?: boolean }> = ({ view, label, icon, disabled }) => (
    <button
      onClick={() => !disabled && onViewChange(view)}
      disabled={disabled}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        activeView === view 
          ? 'bg-indigo-600 text-white shadow-lg' 
          : disabled 
            ? 'opacity-25 cursor-not-allowed text-slate-500'
            : 'text-slate-400 hover:text-white hover:bg-white/10'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {disabled && <span className="ml-auto text-[8px] border border-slate-700 px-1 rounded">ROOT</span>}
    </button>
  );

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 flex flex-col z-40" style={{ backgroundColor: '#00172b' }}>
      <div className="p-6">
        {/* Logo eDATA Centralizado */}
        <div className="flex flex-col items-center mb-10 px-2">
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-2xl font-black text-white tracking-tighter">eDATA</h1>
          </div>
          <div className="mt-1 text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] text-center">Evasão Escolar</div>
        </div>

        <nav className="space-y-2">
          <NavLink view="dashboard" label="Dashboard" icon={<ICONS.Layout />} />
          <NavLink view="active-search" label="Busca Ativa" icon={<ICONS.Search />} />
          <NavLink 
            view="admin" 
            label="Administração" 
            icon={<ICONS.Shield />} 
            disabled={userRole !== 'Admin'}
          />
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-white/10">
        <button 
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-rose-400 rounded-lg transition-colors"
        >
          <ICONS.Logout />
          <span className="font-medium">Sair do Sistema</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
