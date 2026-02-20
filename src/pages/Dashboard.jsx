import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>Panel de Estudiantes 🎓</h1>
      <p>Bienvenido a tu plataforma de tutorías.</p>
      
      {/* Botón simple para probar el cierre de sesión local */}
      <button 
        onClick={logout} 
        style={{ padding: '10px', background: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}