
import React from 'react';
import { MOCK_STUDENTS } from '../constants';
import { Student } from '../types';

interface ActiveSearchViewProps {
  onRowClick: (student: Student) => void;
}

const ActiveSearchView: React.FC<ActiveSearchViewProps> = ({ onRowClick }) => {
  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'Critical': return <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full border border-rose-200 uppercase tracking-wide">Crítico</span>;
      case 'High': return <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full border border-amber-200 uppercase tracking-wide">Alto</span>;
      case 'Medium': return <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full border border-indigo-200 uppercase tracking-wide">Médio</span>;
      default: return <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 uppercase tracking-wide">Baixo</span>;
    }
  };

  const getUBSBadge = (status: string) => {
    switch (status) {
      case 'Synchronized': return <span className="flex items-center text-emerald-600 text-xs font-semibold"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>Sincronizado</span>;
      case 'Alert': return <span className="flex items-center text-rose-600 text-xs font-semibold"><div className="w-2 h-2 rounded-full bg-rose-500 mr-2"></div>Pendente / Alerta</span>;
      default: return <span className="flex items-center text-amber-600 text-xs font-semibold"><div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>Em Processamento</span>;
    }
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Módulo de Busca Ativa</h2>
          <p className="text-slate-500">Listagem de alunos categorizados por nível de risco de evasão.</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-md hover:bg-indigo-700 transition-all flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          Nova Visita Domiciliar
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">CPF (PK)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nome do Aluno</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Escola</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Frequência</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status UBS</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Risco</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_STUDENTS.map((student) => (
                <tr 
                  key={student.cpf}
                  onClick={() => onRowClick(student)}
                  className={`cursor-pointer hover:bg-slate-50 transition-colors ${student.risk === 'Critical' ? 'bg-rose-50/50' : ''}`}
                >
                  <td className="px-6 py-5">
                    <span className="font-mono text-sm text-slate-600 font-medium">{student.cpf}</span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-semibold text-slate-900">{student.name}</p>
                    <p className="text-xs text-slate-500 italic">Identidade Protegida</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-700 font-medium">{student.school}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-full max-w-[120px] space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500">
                        <span>{student.attendance}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all ${student.attendance < 50 ? 'bg-rose-500' : student.attendance < 80 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {getUBSBadge(student.ubsStatus)}
                  </td>
                  <td className="px-6 py-5 text-right">
                    {getRiskBadge(student.risk)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-200">
          <span className="text-sm text-slate-500 font-medium">Exibindo 5 de 12.450 alunos</span>
          <div className="flex space-x-2">
            <button className="p-2 border border-slate-200 rounded-lg bg-white text-slate-400 cursor-not-allowed"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg></button>
            <button className="p-2 border border-slate-200 rounded-lg bg-white text-slate-700 hover:bg-slate-50"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSearchView;
