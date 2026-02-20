import { createContext, useState, useEffect } from 'react';
import api from './api'; // Tu instancia de axios configurada con credenciales

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Esta función verifica con el backend si la sesión es válida
  const verifySession = async () => {
    try {
      // Hacemos una petición a una ruta protegida. 
      // El navegador adjuntará la cookie HttpOnly automáticamente.
      // Si responde 200, la cookie es válida.
      await api.get('/users/me'); 
      setIsAuthenticated(true);
    } catch (error) {
      // Si da error (ej. 401 Unauthorized), la cookie expiró o no existe
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  // Se ejecuta una sola vez cada vez que se recarga la página
  useEffect(() => {
    verifySession();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      // Le decimos al backend: "Por favor, destruye la cookie de esta sesión"
      // Nota: Asegúrate de que tu backend tenga esta ruta creada para invalidar la cookie
      await api.post('/logout'); 
    } catch (error) {
      console.error("Error al intentar cerrar sesión en el servidor:", error);
    } finally {
      // Independientemente de si el backend responde bien o mal, 
      // bloqueamos el acceso en el frontend inmediatamente
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};