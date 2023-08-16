import React from 'react';
import './HomePageForm.css';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa';
import appleIcon from './icons/apple.svg'
import bananaIcon from './icons/banana.svg'

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
        <h1 className="phrase">
        <span className="tx1">Premium </span> 
        <span className="tx2">quality<br /></span> 
        <span className="tx3">
          Food for your <img src={bananaIcon} alt="Banana Icon" className="imagem" />
        </span>{" "}
        <span className="tx4">healthy<br /></span>{" "} 
        <span className="tx5"><img src={appleIcon} alt="Apple Icon" className="imagem" />& Daily Life</span>
        </h1>
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