
import React, { useState } from 'react';
import { UserRole } from '../types';

interface AdminViewProps {
  userRole: UserRole;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
  organization: string;
}

const MOCK_USERS: User[] = [
  { id: 1, name: 'Dr. Ricardo Mendes', email: 'ricardo.mendes@gov.br', role: 'Admin', status: 'Ativo', lastActive: 'Hoje, 09:42', organization: 'SEMED - Sede' },
  { id: 2, name: 'Profa. Ana Clara', email: 'ana.clara@edu.br', role: 'Professional', status: 'Ativo', lastActive: 'Ontem, 16:20', organization: 'E.M. Olavo Bilac' },
  { id: 3, name: 'Sérgio Santos', email: 'sergio.santos@ubs.gov.br', role: 'Professional', status: 'Ausente', lastActive: 'Há 3 dias', organization: 'UBS Centro' },
  { id: 4, name: 'Mariana Lima', email: 'mariana.lima@gov.br', role: 'Admin', status: 'Ativo', lastActive: 'Hoje, 11:15', organization: 'CRAS Norte' },
  { id: 5, name: 'Cláudio Ferreira', email: 'claudio.f@edu.br', role: 'Professional', status: 'Suspenso', lastActive: '12/10/2023', organization: 'C.E. Marechal Rondon' },
];

const AdminView: React.FC<AdminViewProps> = ({ userRole }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>(MOCK_USERS);

  if (userRole !== 'Admin') {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
        <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-11a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900">Acesso Restrito</h3>
        <p className="text-slate-500 mt-2">Apenas usuários com nível de administrador podem visualizar esta seção.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Painel Administrativo</h2>
          <p className="text-slate-500">Gerenciamento de usuários, permissões e segurança (LGPD).</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-[#00172b] text-white rounded-xl font-bold text-sm shadow-md hover:bg-slate-800 transition-all flex items-center active:scale-95"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
          Adicionar Usuário
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-2">Total de Acessos</h3>
          <p className="text-3xl font-black text-[#00172b]">{users.length * 24}</p>
          <p className="text-xs text-emerald-500 font-bold mt-1">Sistemas Operantes</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-2">Integração Gov.br</h3>
          <div className="flex items-center text-emerald-600 text-xs font-bold uppercase tracking-wider mt-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div> Ativo e Estável
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-2">Logs Recentes</h3>
          <p className="text-sm text-slate-500">Eventos de auditoria em conformidade.</p>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 mt-2">Visualizar Auditoria &rarr;</button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Usuários Cadastrados</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Usuário</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Órgão / Setor</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Papel</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Último Acesso</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-400 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${user.id}/40`} alt="" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                      {user.organization}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tight ${
                      user.role === 'Admin' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        user.status === 'Ativo' ? 'bg-emerald-500' : user.status === 'Suspenso' ? 'bg-rose-500' : 'bg-amber-400'
                      }`}></div>
                      <span className="text-xs font-medium text-slate-600">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs text-slate-500 font-medium">{user.lastActive}</span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-indigo-600 transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Adicionar Usuário */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          ></div>
          
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 animate-in zoom-in-95 duration-200 overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Novo Usuário</h3>
                <p className="text-sm text-slate-500 font-medium">Cadastre um novo colaborador no sistema.</p>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <form className="p-8 space-y-6" onSubmit={(e) => {
              e.preventDefault();
              // Simulação de salvamento
              setIsAddModalOpen(false);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ex: João da Silva"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">E-mail Institucional</label>
                  <input 
                    type="email" 
                    placeholder="joao@gov.br"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder-slate-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Órgão / Setor</label>
                    <input 
                      type="text" 
                      placeholder="Ex: SEMED, UBS..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Perfil de Acesso</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium appearance-none">
                      <option value="Professional">Profissional</option>
                      <option value="Admin">Administrador</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex space-x-3">
                <button 
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl font-bold text-sm transition-all"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 bg-[#00172b] text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-100 hover:bg-slate-800 transition-all active:scale-95"
                >
                  Salvar Usuário
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminView;
