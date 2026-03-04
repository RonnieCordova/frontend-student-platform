export const Dashboard = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Resumen Académico</h1>
                <p className="text-slate-600">Bienvenido a tu ecosistema de aprendizaje. Aquí tienes tu estado actual.</p>
            </header>

            {/* Tarjetas de Métricas de Negocio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">👨‍🏫</div>
                    <div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Próxima Tutoría</p>
                        <p className="text-xl font-bold text-slate-900">Estructura de Datos</p>
                        <p className="text-sm font-medium text-blue-600">Hoy, 18:00 hrs</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">🗄️</div>
                    <div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Bóveda</p>
                        <p className="text-xl font-bold text-slate-900">Suscripción Activa</p>
                        <p className="text-sm font-medium text-emerald-600">14 descargas restantes</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center text-2xl">💳</div>
                    <div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Billetera Virtual</p>
                        <p className="text-3xl font-black text-slate-900">$12.50</p>
                        <p className="text-sm font-medium text-slate-500">Saldo disponible</p>
                    </div>
                </div>
            </div>

            {/* Sección de Actividad Reciente */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-900">Archivos Populares en tu Facultad</h2>
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-800">Ver Bóveda →</button>
                </div>
                <div className="p-8 flex flex-col items-center justify-center text-center py-16">
                    <div className="text-5xl mb-4">📭</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Aún no has explorado la bóveda</h3>
                    <p className="text-slate-500 max-w-md">Busca exámenes resueltos, guías y proyectos subidos por la comunidad para potenciar tu estudio.</p>
                </div>
            </div>
        </div>
    );
};