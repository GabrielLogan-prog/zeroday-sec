import React, { useState } from 'react';

function FilterSection({ onFilter }) {
  const [ipFilter, setIpFilter] = useState('');

  const handleFilter = () => {
    if (isValidIPFormat(ipFilter)) {
      onFilter(ipFilter);
    } else {
      alert('Formato de IP inválido. Use o formato 000.000.000.00');
    }
  };

  const isValidIPFormat = (ip) => {
    const ipPattern = /^(\d{1,3}\.){0,3}\d{1,3}(\.)?$/;
    return ipPattern.test(ip);
  };

  return (
    <section className="filter-section">
      <div className="filter-container">
        <input
          type="text"
          id="ipFilter"
          placeholder="Enter IP Address"
          value={ipFilter}
          onChange={(e) => setIpFilter(e.target.value)}
        />
        <button id="filterButton" className="filter-btn" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </section>
  );
}

export default FilterSection;

