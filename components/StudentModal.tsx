
import React from 'react';
import { Student } from '../types';
import { ICONS } from '../constants';

interface StudentModalProps {
  student: Student;
  onClose: () => void;
}

const StudentModal: React.FC<StudentModalProps> = ({ student, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl ${student.risk === 'Critical' ? 'bg-rose-600' : 'bg-indigo-600'}`}>
              {student.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{student.name}</h3>
              <p className="text-slate-500 font-medium">CPF: {student.cpf} • {student.school}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto grid grid-cols-12">
          {/* Left Panel: Indicators */}
          <div className="col-span-12 md:col-span-5 bg-slate-50 p-8 space-y-8">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Indicadores de Vulnerabilidade</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium mb-1">Idade</p>
                  <p className="text-xl font-bold text-slate-900">{student.age} anos</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium mb-1">Score Vulner.</p>
                  <p className={`text-xl font-bold ${student.vulnerabilityScore > 8 ? 'text-rose-600' : 'text-indigo-600'}`}>{student.vulnerabilityScore.toFixed(1)}/10</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Saúde & UBS</h4>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${student.ubsStatus === 'Synchronized' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                <span className="text-sm font-semibold text-slate-700">Status Vacinal: {student.ubsStatus === 'Synchronized' ? 'Em dia' : 'Atrasado'}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span className="text-sm font-semibold text-slate-700">Acompanhamento Nutricional: Ok</span>
              </div>
            </div>

            <div className="p-4 bg-indigo-600 rounded-2xl text-white">
              <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-2">Insight de IA</h4>
              <p className="text-sm leading-relaxed">Padrão de faltas às segundas-feiras sugere insegurança alimentar ou demandas de cuidado familiar nos finais de semana.</p>
            </div>
          </div>

          {/* Right Panel: Timeline */}
          <div className="col-span-12 md:col-span-7 p-8">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Linha do Tempo de Alertas</h4>
            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
              {student.alerts.length > 0 ? (
                student.alerts.map((alert) => (
                  <div key={alert.id} className="relative pl-10">
                    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${
                      alert.category === 'Attendance' ? 'bg-rose-500' : 'bg-amber-500'
                    }`}></div>
                    <div className="bg-white rounded-xl p-4 border border-slate-100 hover:border-slate-200 transition-all shadow-sm">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold text-slate-900">{alert.type}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{new Date(alert.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{alert.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-slate-400 font-medium italic">Nenhum alerta registrado nos últimos 90 dias.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-100 flex justify-between items-center bg-white">
          <div className="flex space-x-3">
            <button className="px-6 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl font-bold text-sm transition-all flex items-center">
              <ICONS.Print />
              <span className="ml-2">Imprimir Dossiê</span>
            </button>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
            Revelar Identidade Real
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
