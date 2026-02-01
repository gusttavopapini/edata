
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginViewProps {
  onLogin: (role: UserRole) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [role, setRole] = useState<UserRole>('Professional');

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 p-10">
        <div className="text-center mb-10">
          {/* Logo eDATA substituindo o símbolo "V" */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-20 h-20 bg-[#00172b] rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-100 overflow-hidden p-2">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <h2 className="text-4xl font-black text-[#00172b] tracking-tighter mt-4">eDATA</h2>
          </div>
          <p className="text-slate-500 font-medium">Plataforma de Monitoramento e Proteção</p>
        </div>

        <div className="mb-8">
          <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
            <button
              onClick={() => setRole('Professional')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                role === 'Professional' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Profissional
            </button>
            <button
              onClick={() => setRole('Admin')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                role === 'Admin' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Admin
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail Institucional</label>
              <input 
                type="email" 
                defaultValue="ricardo.mendes@gov.br"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
              <input 
                type="password" 
                defaultValue="password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => onLogin(role)}
          className="w-full py-4 bg-[#00172b] hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200 active:scale-95"
        >
          Entrar no Sistema
        </button>

        <p className="mt-8 text-center text-xs text-slate-400">
          Acesso restrito a servidores autorizados conforme LGPD.<br/>
          Copyright &copy; 2024 Evasão Escolar eDATA.
        </p>
      </div>
    </div>
  );
};

export default LoginView;
