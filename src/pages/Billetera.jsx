import { useState } from 'react';

export const Billetera = () => {
    // Estados simulados para la interfaz
    const [saldo, setSaldo] = useState(12.50);
    const [montoRecarga, setMontoRecarga] = useState(10);

    return (
        <div className="max-w-5xl mx-auto">
            
            <header className="mb-10">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Billetera Virtual</h1>
                <p className="text-slate-600">Gestiona tus créditos para tutorías y acceso a la bóveda.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                
                {/* Lado Izquierdo: Tarjeta de Saldo y Recarga (Ocupa 2 columnas) */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    
                    {/* Tarjeta Principal (Estilo Tarjeta de Crédito Premium) */}
                    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200 text-white relative overflow-hidden">
                        {/* Círculos decorativos de fondo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
                        
                        <div className="relative z-10 flex justify-between items-start mb-8">
                            <div>
                                <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase mb-1">Saldo Disponible</p>
                                <h2 className="text-5xl font-black">${saldo.toFixed(2)} <span className="text-xl text-slate-400 font-medium">USD</span></h2>
                            </div>
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <span className="text-2xl">💳</span>
                            </div>
                        </div>
                        
                        <div className="relative z-10 flex items-center justify-between text-sm text-slate-300 font-medium border-t border-white/10 pt-4 mt-4">
                            <span>Plan Actual: Freemium</span>
                            <span>ID: 8492-XXXX-XXXX</span>
                        </div>
                    </div>

                    {/* Panel de Recarga */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Recargar Saldo</h3>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {[5, 10, 20].map((monto) => (
                                <button 
                                    key={monto}
                                    onClick={() => setMontoRecarga(monto)}
                                    className={`py-3 rounded-xl font-bold border-2 transition-all ${montoRecarga === monto ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300'}`}
                                >
                                    ${monto}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <span className="absolute left-4 top-3.5 text-slate-400 font-bold">$</span>
                                <input 
                                    type="number" 
                                    value={montoRecarga}
                                    onChange={(e) => setMontoRecarga(Number(e.target.value))}
                                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-bold text-slate-700"
                                />
                            </div>
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95">
                                Continuar al Pago
                            </button>
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Métodos de Pago Guardados */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Métodos de Pago</h3>
                    
                    <div className="flex flex-col gap-4 mb-8">
                        {/* Tarjeta Guardada */}
                        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between group cursor-pointer hover:border-blue-300 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-8 bg-slate-800 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">•••• 4242</p>
                                    <p className="text-xs text-slate-500">Expira 12/28</p>
                                </div>
                            </div>
                            <span className="text-slate-300 group-hover:text-blue-500">⋮</span>
                        </div>

                        {/* Transferencia Local */}
                        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between group cursor-pointer hover:border-blue-300 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-8 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center text-lg">🏦</div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Transferencia Bancaria</p>
                                    <p className="text-xs text-slate-500">Verificación manual</p>
                                </div>
                            </div>
                            <span className="text-slate-300 group-hover:text-blue-500">⋮</span>
                        </div>
                    </div>

                    <button className="mt-auto w-full py-3 rounded-xl border border-dashed border-slate-300 text-slate-500 font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                        <span>+</span> Agregar método nuevo
                    </button>
                </div>

            </div>

            {/* Historial de Transacciones */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-900">Historial de Movimientos</h2>
                </div>
                
                <div className="divide-y divide-slate-100">
                    {/* Transacción 1 */}
                    <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-lg">⬇️</div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Suscripción Bóveda (Mensual)</p>
                                <p className="text-xs text-slate-500">14 de Octubre, 2026</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-slate-900">-$3.00</span>
                    </div>

                    {/* Transacción 2 */}
                    <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-lg">⬆️</div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Recarga de Saldo (Tarjeta VISA)</p>
                                <p className="text-xs text-slate-500">10 de Octubre, 2026</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-green-600">+$15.50</span>
                    </div>

                    {/* Transacción 3 */}
                    <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-lg">⬇️</div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Tutoría: Cálculo Vectorial</p>
                                <p className="text-xs text-slate-500">02 de Octubre, 2026</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-slate-900">-$10.00</span>
                    </div>
                </div>
                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 text-center">
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-800">Ver todas las transacciones</button>
                </div>
            </div>

        </div>
    );
};