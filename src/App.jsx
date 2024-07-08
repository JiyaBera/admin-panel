import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AssetsManagement from './pages/Assets-management';
import DeviceManagement from './pages/Device-management';
import CustomerManagement from './pages/Customer-management';
import LoggerManagement from './pages/Logger-management';
import SidePanel from './components/SidePanel';
import Header from './components/Header';
import './components/SidePanel.css';
import './components/Header.css';
import './App.css';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'; // Corrected import

const App = () => {
  return (
    <Router>
      <div className="app">
        <SidePanel />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/customer-management" element={<CustomerManagement />} />
            <Route path="/device-management" element={<DeviceManagement />} />
            <Route path="/logger-management" element={<LoggerManagement />} />
            <Route path="/assets-management" element={<AssetsManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
