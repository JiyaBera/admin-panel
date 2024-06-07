import React from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <ul>
        <li><Link to="/customer-management">Customer Management</Link></li>
        <li><Link to="/device-management">Device Management</Link></li>
        <li><Link to="/logger-management">Logger Management</Link></li>
        <li><Link to="/assets-management">Asset Management</Link></li>
      </ul>
    </div>
  );
};

export default SidePanel;