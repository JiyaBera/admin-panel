import React from 'react';
import { NavLink } from 'react-router-dom';

const SidePanel = () => {
  return (
    <nav className="side-panel">
      <ul>
        <li class="customer-management"><NavLink to="/customer-management" activeClassName="active">Customer Management</NavLink></li>
        <li class="customer-management"><NavLink to="/device-management" activeClassName="active">Customer Device Management</NavLink></li>
        <li class="customer-management"><NavLink to="/logger-management" activeClassName="active">Logger Management</NavLink></li>
        <li class="customer-management"><NavLink to="/assets-management" activeClassName="active">Assets Management</NavLink></li>
      </ul>
    </nav>
  );
};

export default SidePanel;
