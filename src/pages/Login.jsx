import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../AuthContext';

export const Login = () => {
    // estados del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setStatus('Validando credenciales...');
        try {
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', password);

            // enviamos los datos, el backend nos devuelve la cookie segura
            await api.post('/login/access-token', formData);
            
            login(); 
            navigate('/dashboard'); 
        } catch (err) {
            console.error("Error en login:", err); 
            setStatus('Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            
            {/* Barra de navegación superior */}
            <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
                <div className="text-2xl font-extrabold tracking-tight text-slate-800">
                    Tutorías<span className="text-blue-600">.</span>
                </div>
                <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                    <a href="#objetivos" className="hover:text-blue-600 transition">Objetivos</a>
                    <a href="#beneficios" className="hover:text-blue-600 transition">Beneficios</a>
                </div>
            </nav>

            {/* SECCIÓN HERO (Mitad info, Mitad Formulario) */}
            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Lado izquierdo: Copywriting persuasivo */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        Domina tu futuro con la mejor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">plataforma de aprendizaje</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Conecta con expertos, organiza tus sesiones de estudio y potencia tus habilidades en un entorno seguro, rápido y diseñado para tu éxito.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#objetivos" className="px-8 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition">
                            Saber más
                        </a>
                    </div>
                </div>

                {/* Lado derecho: Formulario de Login */}
                <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Bienvenido de nuevo</h2>
                    <p className="text-slate-500 mb-8 text-sm">Ingresa a tu panel de control de estudiante.</p>

                    <form onSubmit={handleLogin} className="flex flex-col gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Correo electrónico</label>
                            <input 
                                type="email" 
                                placeholder="ejemplo@correo.com" 
                                onChange={e => setEmail(e.target.value)} 
                                required 
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Contraseña</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                onChange={e => setPassword(e.target.value)} 
                                required 
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95"
                        >
                            Iniciar Sesión
                        </button>
                    </form>

                    {status && (
                        <div className={`mt-6 p-4 rounded-xl text-sm font-medium text-center border ${status.includes('incorrectas') ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
                            {status}
                        </div>
                    )}
                </div>
            </main>

            {/* SECCIÓN SOBRE LA APP (Scroll hacia abajo) */}
            <section id="objetivos" className="bg-white py-20 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué usar nuestra plataforma?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Nuestra arquitectura está diseñada para ofrecerte la experiencia educativa más fluida y segura del mercado.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Tarjeta 1 */}
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">🔒</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Máxima Seguridad</h3>
                            <p className="text-slate-600">Tus datos viajan encriptados y protegidos bajo los estándares más estrictos de seguridad en la nube.</p>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6">⚡</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Rendimiento Fluido</h3>
                            <p className="text-slate-600">Interfaz rápida y optimizada para que pierdas menos tiempo esperando y más tiempo aprendiendo.</p>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6">📱</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">100% Responsivo</h3>
                            <p className="text-slate-600">Estudia desde tu computadora de escritorio o revisa tus clases en el camino desde tu teléfono móvil.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="bg-slate-900 py-8 text-center text-slate-400 text-sm">
                <p>© 2026 Tutorías Platform. Arquitectura Cloud Segura.</p>
            </footer>

        </div>
    );
};