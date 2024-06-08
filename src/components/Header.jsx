import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';


function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('.user-menu')) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        {/* Optional: Add content here, like a logo */}
      </div>
      <div className="header-right">
        <div className="user-menu" onClick={toggleDropdown}>
          <img src="/9187604.png" alt="User" className="user-icon" />
          {dropdownOpen && (
            <div className="dropdown-content">
              <div className="user-details">
                <img src="/9187604.png" alt="User" className="dropdown-user-icon" />
                <span className="user-name">UI/UX Designer</span>
              </div>
              <a href="#view-profile"><FaUserCircle /> View Profile</a>
              <a href="#account-settings"><FaCog /> Account Settings</a>
              <a href="#logout"><FaSignOutAlt /> Logout</a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Header;
