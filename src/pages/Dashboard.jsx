import { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';

export const Dashboard = () => {
    // extraigo la funcion para cerrar sesion
    const { logout } = useContext(AuthContext);
    
    // estado para abrir/cerrar el menu lateral en celulares
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* estilos para el layout del dashboard y grid responsivo */}
            <style>{`
                .dashboard-layout {
                    display: flex;
                    height: 100vh;
                    background-color: #f1f5f9;
                    font-family: 'Inter', system-ui, sans-serif;
                    overflow: hidden;
                }
                .sidebar {
                    width: 280px;
                    background-color: white;
                    border-right: 1px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s ease;
                    z-index: 50;
                }
                .main-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                }
                .topbar {
                    height: 70px;
                    background-color: white;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 24px;
                    position: sticky;
                    top: 0;
                    z-index: 40;
                }
                .grid-cards {
                    display: grid;
                    /* esto hace que las tarjetas se ajusten solas dependiendo del ancho de la pantalla */
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 24px;
                    margin-top: 24px;
                }
                .stat-card {
                    background: white;
                    padding: 24px;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                    transition: transform 0.2s ease;
                }
                .stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .btn-logout {
                    padding: 8px 16px;
                    border-radius: 8px;
                    border: 1px solid #cbd5e1;
                    background: white;
                    color: #475569;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-logout:hover {
                    background: #fef2f2;
                    color: #ef4444;
                    border-color: #fca5a5;
                }
                .menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 5px;
                }
                
                /* reglas especificas para celulares */
                @media (max-width: 768px) {
                    .sidebar {
                        position: absolute;
                        height: 100%;
                        /* escondo el sidebar moviendolo fuera de la pantalla */
                        transform: translateX(-100%); 
                    }
                    /* clase para mostrar el sidebar cuando el usuario toca el boton */
                    .sidebar.open {
                        transform: translateX(0);
                        box-shadow: 10px 0 15px -3px rgba(0, 0, 0, 0.1);
                    }
                    .menu-toggle {
                        display: block; /* muestro el boton de menu en celulares */
                    }
                }
            `}</style>

            <div className="dashboard-layout">
                
                {/* menu lateral */}
                <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
                            Tutorías<span style={{ color: '#3b82f6' }}>.</span>
                        </h2>
                        {/* boton para cerrar el menu en celular */}
                        <button className="menu-toggle" onClick={() => setIsSidebarOpen(false)}>
                            ✕
                        </button>
                    </div>
                    
                    <nav style={{ padding: '24px', flex: 1 }}>
                        <div style={{ padding: '12px 16px', backgroundColor: '#eff6ff', borderRadius: '10px', color: '#2563eb', fontWeight: '600', cursor: 'pointer' }}>
                            📊 Panel General
                        </div>
                    </nav>
                </aside>

                {/* contenido derecho */}
                <main className="main-content">
                    
                    <header className="topbar">
                        {/* boton de menu hamburguesa para celulares */}
                        <button className="menu-toggle" onClick={() => setIsSidebarOpen(true)}>
                            ☰
                        </button>
                        
                        {/* empuja el boton de logout a la derecha si no hay menu hamburguesa */}
                        <div style={{ flex: 1 }}></div> 

                        <button className="btn-logout" onClick={logout}>
                            Cerrar Sesión
                        </button>
                    </header>

                    {/* area principal de informacion */}
                    <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
                        <div>
                            <h1 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '2rem', fontWeight: '700', letterSpacing: '-0.5px' }}>
                                Visión General
                            </h1>
                            <p style={{ margin: 0, color: '#64748b', fontSize: '1.1rem' }}>
                                Monitorea tu progreso y próximas sesiones.
                            </p>
                        </div>

                        {/* tarjetas responsivas */}
                        <div className="grid-cards">
                            <div className="stat-card">
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                    <span style={{ background: '#dbeafe', color: '#2563eb', padding: '8px', borderRadius: '8px', marginRight: '12px', fontSize: '1.2rem' }}>📚</span>
                                    <h3 style={{ margin: 0, color: '#475569', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Clases Activas</h3>
                                </div>
                                <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>4</p>
                            </div>

                            <div className="stat-card">
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                    <span style={{ background: '#fef3c7', color: '#d97706', padding: '8px', borderRadius: '8px', marginRight: '12px', fontSize: '1.2rem' }}>⏱️</span>
                                    <h3 style={{ margin: 0, color: '#475569', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Próxima Tutoría</h3>
                                </div>
                                <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: '700', color: '#0f172a' }}>Ciberseguridad 101</p>
                                <p style={{ margin: '4px 0 0 0', color: '#64748b', fontWeight: '500', fontSize: '0.9rem' }}>Mañana, 10:00 AM</p>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </>
    );
};