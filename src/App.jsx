import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AssetsManagement from './pages/Assets-management';
import DeviceManagement from './pages/Device-management';
import CustomerManagement from './pages/Customer-management';
import LoggerManagement from './pages/Logger-management';
import SidePanel from './components/SidePanel';
import './components/SidePanel.css'; // Import SidePanel.css

const App = () => {
  return (
    <Router>
      <div className="app">
        <SidePanel />
        <Routes>
          <Route path="/customer-management" element={<CustomerManagement />} />
          <Route path="/device-management" element={<DeviceManagement />} />
          <Route path="/logger-management" element={<LoggerManagement />} />
          <Route path="/assets-management" element={<AssetsManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
