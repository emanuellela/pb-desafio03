import React, { useState } from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

interface RegisterProps {
  onRegister: (fullName: string, username: string, email: string, password: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Valida a senha e confirma
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Chama a função com os dados do form
    onRegister(fullName, username, email, password);
  };

  return (
    <div>
      <header className="register-header">
        <Logo></Logo>
        <div className={`register-text align-bottom space-vertical`}> 
          <p>Register</p>
        </div>
      </header>

      <div className='header-text'> 
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
        <div className="register-link">
          <p>Yes i have an account? Login</p>
          <a href="#">Login</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;