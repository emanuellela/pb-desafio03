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
      const response = await axios.post(
        'https://parseapi.back4app.com/login', // Endpoint de login REST
        {
          username,
          password,
        },
        {
          headers: {
            'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh', // Parse App ID
            'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08', // Parse REST API Key
            'Content-Type': 'application/json',
          },
        }
      );
  
      const sessionToken = response.data.sessionToken;
      console.log('Logged in successfully');
      // Redirecionar para a página inicial ou fazer qualquer outra ação necessária
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please try again.');
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
        {error && <div className="error">{error}</div>}
        <div className="register-link">
          <p>Don't have an account?</p>
          <a href="#">Register</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginForm;