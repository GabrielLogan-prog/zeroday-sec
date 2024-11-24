import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao Dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;

