import React from 'react';
import './HomePageForm.css';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa';
import appleIcon from './icons/apple.svg'
import bananaIcon from './icons/banana.svg'

import Card from '../../components/Card/CardHomePage'; // Importe o componente Card
import card1Image from '../../components/Card/images/RamachandraParlour.png'; // Importe as imagens dos cards

interface HomePageFormProps {}

const HomePageForm: React.FC<HomePageFormProps> = () => {

// Array de objetos representando os cards
const cards = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    imageSrc: card1Image,
  },

  // Adicionar mais objetos para os outros cards 
  ];

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

      <div className="homep-cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

  


export default HomePageForm;