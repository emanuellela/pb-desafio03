import React from 'react';
import { Link } from 'react-router-dom';
import iconLogo from './icons/logo.svg';
import './Logo.css';
import { useAuth } from '../../services/navigation/AuthContext';

const Logo: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="logo-logo">
      <Link to={isAuthenticated ? '/dashboard' : '/login'}>
        <img src={iconLogo} className="logo" alt="Logo" />
        <h2>FitMe</h2>
      </Link>
    </div>
  );
};

export { Logo };
