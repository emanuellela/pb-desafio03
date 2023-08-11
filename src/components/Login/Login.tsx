import React, { useState } from 'react';
import './Login.css';
import iconLogo from './icons/logo.svg';
import iconLogo2 from './icons/logo-white.svg';
import iconFb from './icons/facebook.svg';
import iconIg from './icons/instagram.svg';
import iconTt from './icons/twitter.svg';

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
      <header className="login-header">
        <div className="login-logo">
          <img src={iconLogo} className="logo" /> 
          <h2>FitMe</h2>
        </div>
        <div className={`login-text align-bottom space-vertical`}> 
          <p>Login</p>
        </div>
      </header>

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
        <nav className="nav-footer">
          <div className="footer-logo">
            <img src={iconLogo2} className="logo-white" /> 
            <h2>FitMe</h2>
          </div>
          <div className="container-social">
            <ul className="lista-footer">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">T&C</a>
              </li>
            </ul>
            <div className="social">
              <a href="http://www.facebook.com">
                <img src={iconFb} className="facebook" />
              </a>
               <a href="http://www.instagram.com">
                <img src={iconIg} className="instagram" />
              </a>
              <a href="http://www.twitter.com">
                <img src={iconTt} className="twitter" />
              </a>
            </div>
          </div>       
          <div className="contact-footer">
            <div className="contact-text">
              <p>Contact:</p>
            </div>
            <div className="contact-number">
               <p>+91 123456789</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Login;