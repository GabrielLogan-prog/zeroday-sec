import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import StatsSection from '../components/StatsSection';
import FilterSection from '../components/FilterSection';
import LogsTable from '../components/LogsTable';
import '../styles/Dashboard.css';

function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [totalAttacks, setTotalAttacks] = useState(0);
  const [totalTraffic, setTotalTraffic] = useState(0);
  const [blockedRequests, setBlockedRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchDDoSLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4444/logs');
      if (!response.ok) {
        throw new Error('Erro ao buscar logs de DDoS');
      }
      const data = await response.json();
      setLogs(data);
      setFilteredLogs(data);
      updateStats(data);
    } catch (error) {
      console.error('Erro na busca de logs:', error);
      alert('Não foi possível carregar os logs de DDoS. Você deve iniciar o servidor com a API.');
    } finally {
      setIsLoading(false);
    }
  };

  const updateStats = (logsData) => {
    setTotalAttacks(logsData.length);
    const blocked = logsData.filter(log => log.WAF === 'BLOCK').length;
    setBlockedRequests(blocked);
    const traffic = logsData.reduce((total, log) => total + (parseInt(log.SIZE) || 0), 0);
    setTotalTraffic(traffic);
  };

  const handleFilter = (filterValue) => {
    if (filterValue) {
      const filtered = logs.filter(log => log.IPV4.startsWith(filterValue));
      setFilteredLogs(filtered);
      updateStats(filtered);
    } else {
      setFilteredLogs(logs);
      updateStats(logs);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="container">
      <Sidebar onLogout={handleLogout} />
      <main className="dashboard">
        <StatsSection
          totalAttacks={totalAttacks}
          totalTraffic={totalTraffic}
          blockedRequests={blockedRequests}
        />
        <FilterSection onFilter={handleFilter} />
        <LogsTable 
          logs={filteredLogs} 
          onRefresh={fetchDDoSLogs} 
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default Dashboard;

