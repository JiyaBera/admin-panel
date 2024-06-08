import React, { useState, useEffect } from 'react';
import './Header.css';

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
       
      </div>
      <div className="header-right">
        <div className="user-menu" onClick={toggleDropdown}>
          <img src="/path_to_user_icon.png" alt="User" className="user-icon"/>
          {dropdownOpen && (
            <div className="dropdown-content">
              <div className="user-details">
                <img src="/path_to_user_icon.png" alt="User" className="dropdown-user-icon"/>
                <span className="user-name">UI/UX Designer</span>
              </div>
              <a href="#view-profile">View Profile</a>
              <a href="#account-settings">Account Settings</a>
              <a href="#logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
