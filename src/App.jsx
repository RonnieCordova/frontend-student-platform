import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { DashboardLayout } from './layouts/DashboardLayout'; // <-- La ruta perfecta
import { Boveda } from './pages/Boveda'; // <-- Con la B mayúscula
import { Billetera } from './pages/Billetera'; 
import { Tutorias } from './pages/Tutorias'; 
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Login />} />
        
        {/* Rutas Protegidas */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout /> 
            </ProtectedRoute>
          } 
        >
          <Route index element={<Dashboard />} />
          <Route path="boveda" element={<Boveda />} />
          <Route path="billetera" element={<Billetera />} />
          <Route path="tutorias" element={<Tutorias />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;