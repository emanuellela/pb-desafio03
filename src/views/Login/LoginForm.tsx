import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const loginMutation = 
    `mutation Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user {
          id
          username
        }
      }
    }`;
    const username = "teste@test.com"
    const password = "teste123"
    const configurationRequest = {
      query: loginMutation,
      variables: {
        username,
        password }
    }
    try {
      const response = await axios.post(
        'https://parseapi.back4app.com/login',
        configurationRequest,
        {
          headers: {
            'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh', // Parse App ID
            'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08', // Parse REST API Key
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Logged in successfully');
      // Redirecionar para a página inicial
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