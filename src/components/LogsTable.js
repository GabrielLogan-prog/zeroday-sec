import React from 'react';

function LogsTable({ logs }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <section className="table-section">
      <div className="table-header-container">
        <h2>DDoS Logs</h2>
        <button className="refresh-button">Refresh</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>IPV4</th>
              <th>Data/Hora</th>
              <th>Method</th>
              <th>URL</th>
              <th>User Agent</th>
              <th>Country</th>
              <th>WAF</th>
              <th>Traffic</th>
              <th>SIZE</th>
            </tr>
          </thead>
          <tbody>
            {logs.slice(0, 10000).map((log, index) => (
              <tr key={index}>
                <td title={log.IPV4}>{log.IPV4}</td>
                <td title={formatDate(log['Date/Time'])}>{formatDate(log['Date/Time'])}</td>
                <td title={log.Method}>{log.Method}</td>
                <td title={log.URL}>{log.URL}</td>
                <td title={log['User Agent']}>{log['User Agent']}</td>
                <td title={log.country}>{log.country}</td>
                <td title={log.WAF}>{log.WAF}</td>
                <td title={log.Traffic}>{log.Traffic}</td>
                <td title={log.SIZE}>{log.SIZE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
        Total de logs: {logs.length} (Exibindo {Math.min(logs.length, 10000)})
      </div>
    </section>
  );
}

export default LogsTable;

