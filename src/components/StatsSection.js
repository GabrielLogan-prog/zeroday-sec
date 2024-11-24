import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function StatsSection({ totalAttacks, totalTraffic, blockedRequests }) {
  const attackChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Attacks',
        data: [4000, 3000, 2000, 2500, 2300, 3200],
        backgroundColor: 'rgba(108, 99, 255, 0.8)',
      },
    ],
  };

  const trafficChartData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Traffic',
        data: [2500, 2000, 10000, 8000, 6000, 5000],
        borderColor: 'rgba(108, 99, 255, 0.8)',
        fill: false,
      },
    ],
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  return (
    <section className="stats">
      <div className="card">
        <i className="fas fa-users"></i>
        <h3 className="total-attacks">{formatNumber(totalAttacks)}</h3>
        <p>Total Attacks</p>
      </div>
      <div className="card">
        <i className="fas fa-shield-alt"></i>
        <h3 className="total-traffic">{formatBytes(totalTraffic)}</h3>
        <p>Total Traffic</p>
      </div>
      <div className="card">
        <i className="fas fa-lock"></i>
        <h3 className="blocked-requests">{formatNumber(blockedRequests)}</h3>
        <p>Blocked Requests</p>
      </div>
      <div className="chart" id="attackFrequency">
        <h3>Attack Frequency</h3>
        <Bar data={attackChartData} options={{ responsive: true }} />
      </div>
      <div className="chart" id="trafficOverview">
        <h3>Traffic Overview</h3>
        <Line data={trafficChartData} options={{ responsive: true }} />
      </div>
    </section>
  );
}

export default StatsSection;

