import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src="/9187604.png" alt="profile" className="profile"/>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src="/9187604.png" alt="email" className="email"/>
              <input type="text" placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
              <img src="/pass.png" alt="pass" className="email"/>
              <input type="password" placeholder="password" className="name"/>
            </div>
            
              <button className="login-button">Login</button>
            
            <p className="link">
              <a href="/ForgotPassword">Forgot password?</a> Or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
