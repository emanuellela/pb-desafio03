import React from 'react';
import './HomePageForm.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa';

interface HomePageFormProps {}

const HomePageForm: React.FC<HomePageFormProps> = () => {
  return (
    <div>
      <header className="homep-header">
        <Logo />
        <BarraPesquisa />
      </header>

      <div className="homep-container">
        <div className="form-group-text">
          <h1 className="tx1">Premium </h1>
          <h1 className="tx2">quality</h1><br />
          <h1 className="tx3">Food for your</h1>
          <h1 className="tx4">healthy</h1><br />
          <h1 className="tx5">& Daily Life</h1>
        </div>
        <p className='ptext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br />
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br />
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageForm;