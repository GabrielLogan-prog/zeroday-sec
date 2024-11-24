import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = atob("ZGV2QHRlaWF4LmNvbQ==");
    const validPassword = atob("MTIzNDU2");

    if (username === validUser && password === validPassword) {
      const token = btoa(`${username}:${password}`);
      localStorage.setItem('authToken', token);
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          width: '300px',
          color: 'aqua',
        }}
      >
        <h2>Login - DDoS Protection</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuário"
            required
            style={{
              width: '280px',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
            style={{
              width: '280px',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          <button
            type="submit"
            style={{
              width: '302px',
              padding: '10px',
              backgroundColor: '#1c1c2e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

