import { useState } from 'react';
import api from './api';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);

      const response = await api.post('/login/access-token', formData);
      localStorage.setItem('token', response.data.access_token);
      setStatus('Login successful! Token saved.');
    } catch (err) {
      setStatus('Error: ' + (err.response?.data?.detail || 'Connection failed'));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Tutorias-Platform 🎓</h1>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div><input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required /></div>
        <div style={{ marginTop: '10px' }}><input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required /></div>
        <button type="submit" style={{ marginTop: '20px', width: '100%' }}>Login</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default App;