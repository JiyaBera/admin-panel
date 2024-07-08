import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidePanel.css'; // Import your CSS file

const SidePanel = () => {
  return (
    <nav className="side-panel">
      <ul>
      <li className="customer-management">
          <NavLink to="/Login" exact activeClassName="active">Login</NavLink>
        </li>
        <li className="customer-management">
          <NavLink to="/customer-management" exact activeClassName="active">Customer Management</NavLink>
        </li>
        <li className="customer-management">
          <NavLink to="/device-management" exact activeClassName="active">Customer Device Management</NavLink>
        </li>
        <li className="customer-management">
          <NavLink to="/logger-management" exact activeClassName="active">Logger Management</NavLink>
        </li>
        <li className="customer-management">
          <NavLink to="/assets-management" exact activeClassName="active">Assets Management</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidePanel;