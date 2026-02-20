import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // Mientras le preguntamos al backend si la cookie es válida, mostramos esto
  if (loading) {
    return <div>Cargando...</div>; 
  }

  // Si no está logueado, lo mandamos a la ruta raíz (el login)
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si está logueado, lo dejamos pasar al componente hijo (ej. el Dashboard)
  return children;
};