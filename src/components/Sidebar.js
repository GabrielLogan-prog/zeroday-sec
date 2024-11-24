import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <h2>DDoS Log Analyzer</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard" className="active"><i className="fas fa-home"></i> Dashboard</Link></li>
          <li><a href="#" className="disabled"><i className="fas fa-chart-line"></i> Analytics</a></li>
          <li><a href="#" className="disabled"><i className="fas fa-bell"></i> Alerts</a></li>
          <li><a href="#" className="disabled"><i className="fas fa-shield-alt"></i> Protection</a></li>
          <li><a href="#" className="disabled"><i className="fas fa-cog"></i> Settings</a></li>
        </ul>
      </nav>
      <a href="#" className="logout" onClick={onLogout}><i className="fas fa-sign-out-alt"></i> Logout</a>
    </aside>
  );
}

export default Sidebar;

