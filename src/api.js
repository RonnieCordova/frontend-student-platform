import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // Fundamental: Esto obliga al navegador a enviar la cookie de sesión automáticamente en cada petición
  withCredentials: true, 
});

// Ya no necesitamos interceptor de peticiones. El navegador hace el trabajo sucio.

// Solo mantenemos el interceptor de respuesta (nuestro guardia)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Si el backend nos da 401 (Unauthorized), la cookie expiró, es falsa o no existe.
    if (error.response && error.response.status === 401 && window.location.pathname !== '/') {
      // Redirigimos al login inmediatamente
      window.location.href = '/'; 
    }
    return Promise.reject(error);
  }
);

export default api;