
import React from 'react';

const DashboardView: React.FC = () => {
  // Simulação de pontos geográficos (latitude/longitude relativa em %)
  const HOTSPOTS = [
    { id: 1, x: 25, y: 35, size: 40, risk: 'Critical', label: 'E.M. Olavo Bilac' },
    { id: 2, x: 65, y: 20, size: 30, risk: 'High', label: 'C.E. Marechal Rondon' },
    { id: 3, x: 45, y: 65, size: 25, risk: 'Medium', label: 'UBS Centro' },
    { id: 4, x: 80, y: 75, size: 35, risk: 'Critical', label: 'CRAS Norte' },
    { id: 5, x: 15, y: 80, size: 20, risk: 'Low', label: 'E.M. Monteiro Lobato' },
    { id: 6, x: 55, y: 45, size: 15, risk: 'Medium', label: 'Setor Sul' },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical': return 'fill-rose-500 stroke-rose-400';
      case 'High': return 'fill-amber-500 stroke-amber-400';
      case 'Medium': return 'fill-indigo-500 stroke-indigo-400';
      default: return 'fill-emerald-500 stroke-emerald-400';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Visão Geral</h2>
        <p className="text-slate-500">Acompanhamento em tempo real da rede municipal.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-rose-50 text-rose-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </span>
            <span className="text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Alunos em Risco Crítico</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">428</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </span>
            <span className="text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-full">-5%</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Alertas de Frequência</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">1,240</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </span>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">98%</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Sincronização UBS</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">15/15 Unidades</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </span>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">+2.4%</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Taxa de Sucesso</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">84.2%</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Geographic Heatmap */}
        <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-slate-900">Mapeamento Geo-Espacial de Risco</h3>
              <p className="text-xs text-slate-400">Concentração de alunas em situação de vulnerabilidade.</p>
            </div>
            <select className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:ring-indigo-500 outline-none font-medium">
              <option>Filtro por Escola</option>
              <option>Filtro por Bairro</option>
            </select>
          </div>
          
          <div className="relative aspect-[16/8] bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100">
            {/* Background Map Simulation (Stylized Grid/Paths) */}
            <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full opacity-30">
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Abstract City Paths */}
              <path d="M0 100 Q 200 80 400 120 T 800 100" fill="none" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
              <path d="M150 0 L 180 400" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
              <path d="M600 0 L 550 400" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
            </svg>

            {/* Hotspots / Circles */}
            <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full">
              {HOTSPOTS.map((point) => (
                <g key={point.id} className="cursor-pointer group">
                  {/* Pulsing ring for Critical risk */}
                  {point.risk === 'Critical' && (
                    <circle 
                      cx={`${point.x}%`} cy={`${point.y}%`} r={point.size} 
                      className="fill-rose-400 opacity-20 animate-ping"
                    />
                  )}
                  {/* Main Circle */}
                  <circle 
                    cx={`${point.x}%`} cy={`${point.y}%`} 
                    r={point.size / 2} 
                    className={`${getRiskColor(point.risk)} fill-opacity-80 stroke-2 transition-all group-hover:fill-opacity-100 group-hover:r-[${point.size / 1.5}]`}
                  />
                  {/* Label on Hover */}
                  <text 
                    x={`${point.x}%`} y={`${point.y - 5}%`} 
                    textAnchor="middle" 
                    className="text-[10px] font-bold fill-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  >
                    {point.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white shadow-sm flex space-x-4">
              <div className="flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                <div className="w-2.5 h-2.5 bg-rose-500 rounded-full mr-1.5 shadow-sm shadow-rose-200"></div> Crítico
              </div>
              <div className="flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full mr-1.5 shadow-sm shadow-amber-200"></div> Alto
              </div>
              <div className="flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-1.5 shadow-sm shadow-indigo-200"></div> Médio
              </div>
            </div>
          </div>
        </div>

        {/* Dropout Funnel */}
        <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-6">Funil de Evasão</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                <span>Total de Alunos</span>
                <span>12,450 (100%)</span>
              </div>
              <div className="h-10 bg-indigo-600 rounded-lg w-full flex items-center px-3 shadow-sm">
                <span className="text-white text-xs font-bold">Matriculados</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                <span>Faltas Recorrentes</span>
                <span>3,210 (25.7%)</span>
              </div>
              <div className="h-10 bg-indigo-500 rounded-lg w-[75%] flex items-center px-3 shadow-sm">
                <span className="text-white text-xs font-bold">Instabilidade</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                <span>Risco Detectado</span>
                <span>840 (6.7%)</span>
              </div>
              <div className="h-10 bg-amber-500 rounded-lg w-[50%] flex items-center px-3 shadow-sm">
                <span className="text-white text-xs font-bold">Busca Ativa</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                <span>Dropout Iminente</span>
                <span>124 (0.9%)</span>
              </div>
              <div className="h-10 bg-rose-500 rounded-lg w-[25%] flex items-center px-3 shadow-sm">
                <span className="text-white text-xs font-bold">Intervenção</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400 italic">Dados processados por IA baseados em frequência e sincronização UBS.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
