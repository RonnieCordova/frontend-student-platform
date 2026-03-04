import { useState } from 'react';

export const Tutorias = () => {
    // buscador de tutores
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-6xl mx-auto">
            
            <header className="mb-10">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Mis Tutorías</h1>
                <p className="text-slate-600">Gestiona tus próximas clases y encuentra a los mejores expertos de tu facultad.</p>
            </header>

            {/* SECCIÓN 1: Urgencia (Próxima Clase) */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg shadow-blue-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                {/* decoracion de fondo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                
                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center text-3xl shadow-inner">
                        🎥
                    </div>
                    <div>
                        <p className="text-blue-100 font-semibold text-sm tracking-wider uppercase mb-1">Tu próxima sesión empieza en 2 horas</p>
                        <h2 className="text-2xl font-bold mb-1">Estructura de Datos - Árboles Binarios</h2>
                        <p className="text-blue-100 text-sm">Con: Ing. Roberto Sánchez</p>
                    </div>
                </div>
                
                <div className="relative z-10 w-full md:w-auto">
                    <button className="w-full md:w-auto px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                        <span>Entrar a la videollamada</span>
                    </button>
                </div>
            </div>

            {/* SECCIÓN 2: Exploración (Encontrar Tutores) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Explorar Tutores</h2>
                
                <div className="relative w-full md:w-96">
                    <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
                    <input 
                        type="text" 
                        placeholder="Buscar por materia o nombre..." 
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Cuadrícula de Tutores */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                
                {/* Tarjeta Tutor 1 */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                    <div className="flex gap-4 items-start mb-4">
                        <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Tutor" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight">Mateo Vargas</h3>
                            <p className="text-sm text-blue-600 font-medium mb-1">Estudiante 8vo Semestre</p>
                            <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                                <span className="text-amber-400">★</span> 4.9 <span className="text-slate-400 font-normal">(42 clases)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-6 flex-1">
                        <p className="text-sm text-slate-600 mb-3">Especialista en backend. Te ayudo a entender la lógica de programación desde cero.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">Python</span>
                            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">Bases de Datos</span>
                        </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <p className="font-black text-slate-900 text-lg">$10<span className="text-sm text-slate-500 font-medium">/hora</span></p>
                        <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all active:scale-95">
                            Agendar
                        </button>
                    </div>
                </div>

                {/* Tarjeta Tutor 2 */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                    <div className="flex gap-4 items-start mb-4">
                        <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="Tutor" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight">Sofía Rendón</h3>
                            <p className="text-sm text-blue-600 font-medium mb-1">Ing. Graduada (Alumni)</p>
                            <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                                <span className="text-amber-400">★</span> 5.0 <span className="text-slate-400 font-normal">(128 clases)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-6 flex-1">
                        <p className="text-sm text-slate-600 mb-3">Si estás sufriendo con las matemáticas de la carrera, yo te doy los trucos para pasar los parciales.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">Cálculo Diferencial</span>
                            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">Física</span>
                        </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <p className="font-black text-slate-900 text-lg">$15<span className="text-sm text-slate-500 font-medium">/hora</span></p>
                        <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all active:scale-95">
                            Agendar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};