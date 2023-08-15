import React, { useState } from 'react';
import './RegisterForm.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import axios from 'axios';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password || password !== confirmPassword) {
      setError('Please fill out all fields and ensure passwords match.');
      return;
    }

    const createUserMutation = `
      mutation CreateUser($fullName:String!, $username: String!, $email: String!, $password: String!) {
        createUser(fullName:$fullName, username: $username, email: $email, password: $password) {
          objectId
          sessionToken
        }
      }
    `;

    const variables = {
      fullName:fullName,
      username: username,
      email: email,
      password: password,
    };

try {
      const response = await axios.post(
        'https://yourapp.back4app.io/parse/users', // Use o endpoint GraphQL correto
        {
          query: createUserMutation,
          variables: variables,
        },
        {
          headers: {
            'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh',
            'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
            'X-Parse-Revocable-Session': '1',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('Registration failed', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <header className="register-header">
        <Logo></Logo>
        <div className={`register-text align-bottom space-vertical`}>
          <p>Register</p>
        </div>
      </header>

      <div className='alert-text'>
        <p><b>Please Fill out form to Register!</b></p>
      </div>

      <div className="register-container">
        <div className="form-group-register">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="register-button" onClick={handleRegister}>Register</button>
        {error && <div className="error">{error}</div>}
        <div className="register-link">
          <p>Yes, I have an account?</p>
          <a href="#">Login</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegisterForm;