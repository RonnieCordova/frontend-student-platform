import { useState } from 'react';

export const Boveda = () => {
    // Estado simulado para la búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-6xl mx-auto">
            
            {/* Cabecera y Buscador */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Bóveda de Recursos</h1>
                    <p className="text-slate-600">Encuentra exámenes, apuntes y guías de tu facultad.</p>
                </div>
                
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center gap-2 w-full md:w-auto justify-center">
                    <span className="text-xl">☁️</span> Subir Archivo
                </button>
            </div>

            {/* Barra de Búsqueda y Filtros */}
            <div className="bg-white p-4 md:p-6 rounded-3xl border border-slate-200 shadow-sm mb-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <span className="absolute left-4 top-3.5 text-slate-400 text-lg">🔍</span>
                        <input 
                            type="text" 
                            placeholder="Buscar por materia, tema o profesor..." 
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                        <option>Todos los semestres</option>
                        <option>1er Semestre</option>
                        <option>5to Semestre</option>
                        <option>8vo Semestre</option>
                    </select>
                </div>
                
                {/* Píldoras de filtrado rápido */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-sm font-semibold">Todos</button>
                    <button className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition">Exámenes Pasados</button>
                    <button className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition">Apuntes de Clase</button>
                    <button className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition">Cuestionarios</button>
                </div>
            </div>

            {/* Cuadrícula de Archivos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Tarjeta de Archivo 1 */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl font-bold">PDF</div>
                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Examen</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">Examen Final Resuelto 2024 - Estructura de Datos</h3>
                    <p className="text-sm text-slate-500 mb-4">Profesor: Ing. Carlos Mendoza</p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <span>⭐ 4.9</span>
                            <span>•</span>
                            <span>📥 128</span>
                        </div>
                        <button className="text-blue-600 font-bold text-sm hover:underline">Descargar</button>
                    </div>
                </div>

                {/* Tarjeta de Archivo 2 */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">DOC</div>
                        <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Apuntes</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">Guía Completa Cálculo Vectorial</h3>
                    <p className="text-sm text-slate-500 mb-4">Subido por: Ana Gómez (Top 1%)</p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <span>⭐ 5.0</span>
                            <span>•</span>
                            <span>📥 342</span>
                        </div>
                        <button className="text-blue-600 font-bold text-sm hover:underline">Descargar</button>
                    </div>
                </div>

                {/* Tarjeta de Archivo 3 */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl font-bold">ZIP</div>
                        <span className="bg-violet-50 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">Proyecto</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">Plantilla Base API REST en Python (AWS)</h3>
                    <p className="text-sm text-slate-500 mb-4">Materia: Sistemas Distribuidos</p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <span>⭐ 4.7</span>
                            <span>•</span>
                            <span>📥 85</span>
                        </div>
                        <button className="text-blue-600 font-bold text-sm hover:underline">Descargar</button>
                    </div>
                </div>

            </div>
        </div>
    );
};