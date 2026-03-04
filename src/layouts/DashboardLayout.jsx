import { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { Outlet, useLocation } from 'react-router-dom';

export const DashboardLayout = () => {
    const { logout } = useContext(AuthContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation(); // Para saber en qué ruta estamos y pintar el botón activo

    // Menú de navegación escalable
    const menuItems = [
        { path: '/dashboard', icon: '📊', label: 'Panel General' },
        { path: '/dashboard/tutorias', icon: '👨‍🏫', label: 'Mis Tutorías' },
        { path: '/dashboard/boveda', icon: '🗄️', label: 'Bóveda de Recursos' },
        { path: '/dashboard/billetera', icon: '💳', label: 'Billetera Virtual' },
    ];

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
            
            {/* Overlay para móviles (oscurece el fondo cuando el menú está abierto) */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/50 z-40 md:hidden transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar (Menú Lateral) */}
            <aside className={`fixed md:static inset-y-0 left-0 w-72 bg-white border-r border-slate-200 flex flex-col z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                
                {/* Logo */}
                <div className="h-20 flex items-center px-8 border-b border-slate-100 justify-between">
                    <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">🎓</div>
                        Tutorías<span className="text-blue-600">.</span>
                    </div>
                    <button className="md:hidden text-slate-500 hover:text-slate-800 text-xl" onClick={() => setIsSidebarOpen(false)}>✕</button>
                </div>

                {/* Navegación */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Menú Principal</p>
                    
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <a 
                                key={item.path}
                                href={item.path} 
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Perfil Mini (Abajo) */}
                <div className="p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold">
                            U
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-bold text-slate-900 truncate">Estudiante</p>
                            <p className="text-xs text-slate-500 truncate">Plan Freemium</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Contenido Principal */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                
                {/* Topbar (Barra Superior) */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 z-30">
                    <button 
                        className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <span className="text-2xl">☰</span>
                    </button>

                    <div className="flex-1"></div> {/* Espaciador */}

                    <button 
                        onClick={logout}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600 transition-all"
                    >
                        Cerrar Sesión
                    </button>
                </header>

                {/* AQUÍ SE INYECTAN LAS PANTALLAS (El hueco) */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-10">
                    <Outlet /> 
                </div>

            </main>
        </div>
    );
};