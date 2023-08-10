import React, { useState } from 'react';
import './Login.css';
import iconLogo from './icons/logo.svg';
import iconLogo2 from './icons/logo-white.svg';

interface LoginProps {
  onLogin: (username: string, fullName: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => { // Quando for clicado o botão de login
    onLogin(username, fullName, password); // Chamar função `onLogin` passando os dados do formulário
  };

  return (
    <div>
      <div className="login-header">
        <div className="login-logo">
          <img src={iconLogo} className="logo" /> 
          <h2>FitMe</h2>
        </div>
        <div className="login-text"> 
          <p>Login</p>
        </div>
      </div>

      <div className="login-container">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <div className="register-link">
          <p>Don't have an account?</p>
          <a href="#">Register</a>
        </div>
      </div>

      <div className="footer-login">
        <div className="footer-logo">
          <img src={iconLogo2} className="logo-white" /> 
          <h2>FitMe</h2>
        </div>
        <div className="menu-footer">
          <a href="#">About us</a>
          <a href="#">Delivery</a>
          <a href="#">Help & Support</a>
          <a href="#">About us</a>
          <a href="#">T&C</a>
        </div>
        <div className="contact-footer">
          <p>Contact: +1 (213) 776 24 10</p>
        </div>
      </div>
    </div>
  );
};

export default Login;