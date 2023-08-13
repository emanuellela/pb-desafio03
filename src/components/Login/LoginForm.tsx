import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://parseapi.back4app.com/login?username=${username}&password=${password}`,
        {
          headers: {
            'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh',
            'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
          },
        }
      );
      onLogin(username, password); 
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <header className="login-header">
        <Logo></Logo>
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
        <div className="form-group-login">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
        <div className="register-link">
          <p>Don't have an account?</p>
          <a href="#">Register</a>
        </div>
      </div>
      <Footer></Footer>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default LoginForm;