import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../AuthContext';

export const Login = () => {
    // estados para controlar si mostramos login o registro
    const [isRegistering, setIsRegistering] = useState(false);
    const [accountType, setAccountType] = useState('student'); // 'student' o 'tutor'

    // estados del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // solo se usa en registro
    const [status, setStatus] = useState('');
    
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(isRegistering ? 'Creando cuenta...' : 'Validando credenciales...');
        
        try {
            if (isRegistering) {
                // logica futura para el registro (por ahora solo simulamos)
                // await api.post('/register', { email, password, name, role: accountType });
                setStatus('Registro exitoso. Iniciando sesión...');
                // despues de registrar, logueamos automaticamente
            } else {
                // logica actual de login
                const formData = new FormData();
                formData.append('username', email);
                formData.append('password', password);
                await api.post('/login/access-token', formData);
            }
            
            login(); 
            navigate('/dashboard'); 
        } catch (err) {
            console.error("Error en auth:", err); 
            setStatus(isRegistering ? 'Error al crear la cuenta.' : 'Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            
            {/* nav superior */}
            <nav className="w-full px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
                <div className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">🎓</div>
                    Tutorías<span className="text-blue-600">.</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
                    <a href="#ecosistema" className="hover:text-blue-600 transition-colors">El Ecosistema</a>
                    <a href="#recursos" className="hover:text-blue-600 transition-colors">Bóveda de Recursos</a>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-16">
                
                {/* seccion izquierda: la propuesta de valor fuerte */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6">
                        🚀 Revolucionando el aprendizaje universitario
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        No estudies solo. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Aprende en comunidad.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        El ecosistema definitivo donde estudiantes y expertos se conectan. 
                        Agenda tutorías personalizadas 1-a-1 y desbloquea el acceso a nuestra bóveda colaborativa: 
                        <strong> apuntes, exámenes pasados, cuestionarios y tips directos de quienes ya aprobaron la materia.</strong>
                    </p>
                    
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                            <span className="text-green-500">✓</span> Verificación Académica
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                            <span className="text-blue-500">✓</span> Recursos Curados
                        </div>
                    </div>
                </div>

                {/* seccion derecha: el panel de autenticacion dinamico */}
                <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100">
                    
                    {/* tabs para alternar entre login y registro */}
                    <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
                        <button 
                            onClick={() => setIsRegistering(false)}
                            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${!isRegistering ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Ingresar
                        </button>
                        <button 
                            onClick={() => setIsRegistering(true)}
                            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${isRegistering ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Crear Cuenta
                        </button>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">
                            {isRegistering ? 'Únete a la plataforma' : 'Bienvenido de vuelta'}
                        </h2>
                        <p className="text-slate-500 text-sm">
                            {isRegistering ? 'Comienza a potenciar tus habilidades hoy mismo.' : 'Accede a tu panel de control académico.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        
                        {/* campos extra solo para el registro */}
                        {isRegistering && (
                            <>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre completo</label>
                                    <input 
                                        type="text" 
                                        placeholder="Juan Pérez" 
                                        onChange={e => setName(e.target.value)} 
                                        required 
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Quiero entrar como:</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div 
                                            onClick={() => setAccountType('student')}
                                            className={`cursor-pointer border-2 rounded-xl p-3 text-center transition-all ${accountType === 'student' ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                                        >
                                            Estudiante
                                        </div>
                                        <div 
                                            onClick={() => setAccountType('tutor')}
                                            className={`cursor-pointer border-2 rounded-xl p-3 text-center transition-all ${accountType === 'tutor' ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                                        >
                                            Tutor
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Correo institucional o personal</label>
                            <input 
                                type="email" 
                                placeholder="ejemplo@universidad.edu" 
                                onChange={e => setEmail(e.target.value)} 
                                required 
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Contraseña</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                onChange={e => setPassword(e.target.value)} 
                                required 
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full mt-2 py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-slate-200 active:scale-[0.98]"
                        >
                            {isRegistering ? 'Crear mi cuenta' : 'Iniciar Sesión'}
                        </button>
                    </form>

                    {status && (
                        <div className={`mt-6 p-4 rounded-xl text-sm font-medium text-center border ${status.includes('Error') || status.includes('incorrectas') ? 'bg-red-50 text-red-600 border-red-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                            {status}
                        </div>
                    )}
                </div>
            </main>

            {/* seccion de beneficios detallados */}
            <section id="ecosistema" className="bg-white py-24 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">El aprendizaje no tiene que ser solitario</h2>
                        <p className="text-lg text-slate-600">
                            Diseñamos una arquitectura pensada para la colaboración masiva. 
                            Cada interacción, archivo y tutoría está centralizada para maximizar tu rendimiento académico.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* tarjeta 1 */}
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-blue-200">
                                👨‍🏫
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Tutorías a Medida</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Filtra tutores por materia, universidad o calificación. Agenda sesiones por videollamada y resuelve dudas específicas en tiempo real con estudiantes de semestres superiores.
                            </p>
                        </div>

                        {/* tarjeta 2 */}
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-emerald-200">
                                🗄️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Bóveda Colaborativa</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Acceso ilimitado a un repositorio alimentado por la comunidad. Descarga tareas resueltas, resúmenes, exámenes de años pasados y cuestionarios interactivos.
                            </p>
                        </div>

                        {/* tarjeta 3 */}
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-violet-200">
                                🛡️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Ecosistema Verificado</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Calidad asegurada. Los tutores y materiales son rankeados por la misma comunidad. Nuestro sistema cloud garantiza que tus datos e interacciones sean 100% privados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer className="bg-slate-900 py-12 text-center text-slate-400 text-sm">
                <p className="mb-2">© 2026 Tutorías Platform. Potenciando universidades en toda la región.</p>
                <p className="text-slate-500">Arquitectura Cloud Segura y Escalable.</p>
            </footer>

        </div>
    );
};