import React from 'react';
import { NavLink } from 'react-router-dom';

const SidePanel = () => {
  return (
    <nav className="side-panel">
      <ul>
        <li><NavLink to="/customer-management" activeClassName="active">Customer Management</NavLink></li>
        <li><NavLink to="/device-management" activeClassName="active">Device Management</NavLink></li>
        <li><NavLink to="/logger-management" activeClassName="active">Logger Management</NavLink></li>
        <li><NavLink to="/assets-management" activeClassName="active">Assets Management</NavLink></li>
      </ul>
    </nav>
  );
};

export default SidePanel;
