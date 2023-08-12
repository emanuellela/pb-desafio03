import iconLogo from './icons/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-logo">
      <img src={iconLogo} className="logo" /> 
      <h2>FitMe</h2>
    </div>
  );
};

export default Logo;