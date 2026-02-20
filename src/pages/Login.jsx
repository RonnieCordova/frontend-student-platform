import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../AuthContext';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', password);

            // 1. Hacemos la petición. El backend validará y nos enviará la cookie HttpOnly en secreto.
            await api.post('/login/access-token', formData);
            
            // ¡Ya no guardamos nada en el localStorage! 
            // La seguridad ahora es 100% invisible y manejada por el navegador.
            
            // 2. Avisamos a React que estamos dentro y redirigimos.
            login(); 
            navigate('/dashboard'); 
        } catch (err) {
            console.error("Detalle del error:", err); 
            setStatus('Error: ' + (err.response?.data?.detail || 'No pudimos conectar con el servidor'));
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh', fontFamily: 'system-ui, sans-serif' }}>
            <h1 style={{ fontWeight: '600', color: '#333' }}>Tutorias Platform 🎓</h1>
            
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px', marginTop: '20px' }}>
                <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
                />
                
                <input 
                    type="password" 
                    placeholder="Tu contraseña" 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
                />
                
                <button 
                    type="submit" 
                    style={{ padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#007BFF', color: 'white', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}
                >
                    Entrar
                </button>
            </form>

            {status && <p style={{ marginTop: '20px', color: status.includes('Error') ? '#D8000C' : '#4F8A10' }}>{status}</p>}
        </div>
    );
};