import React, { useState, useEffect } from 'react';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa';
import appleIcon from './icons/apple.svg';
import bananaIcon from './icons/banana.svg';
import Card from '../../components/Card/CardHomePage';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';
import './HomePageForm.css';

import { cardImages } from '../../UI/imagesPath';

interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

interface HomePageFormProps {

}

const HomePageForm: React.FC<HomePageFormProps> = () => {
  const [numColumns, setNumColumns] = useState(4);
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setNumColumns(2);
      } else {
        setNumColumns(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const headers = {
          'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
          'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
          'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
          'X-Parse-Revocable-Session': '1',
          'Content-Type': 'application/json',
        };

        const graphQLQuery = `
          query {
            cards {
              title
              description
              imageSrc
            }
          }
        `;

        const response = await axios.post(
          'https://parseapi.back4app.com/graphql',
          {
            query: graphQLQuery,
          },
          {
            headers: headers,
          }
        );

        const cardData = response.data.data.cards;

        console.log('Card data:', cardData);
        setCards(cardData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCards();
  }, []);

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
        {loading ? (
          <p>Loading...</p>
        ) : (
  
        <div className="homep-cards-columns">
          {Array.from({ length: numColumns }).map((_, colIndex) => (
            <div key={colIndex} className="homep-cards-column">
              {cards
                .slice(
                  colIndex * Math.ceil(cards.length / numColumns),
                  (colIndex + 1) * Math.ceil(cards.length / numColumns)
                )
                .map((card, cardIndex) => (
                  <Card
                    key={cardIndex}
                    title={card.title}
                    description={card.description}
                    hpageImages={cardImages}
                  />
                ))}
            </div>
          ))}
        </div>

        )}
      </div>

      <Footer />
    </div>
  );
};

export default HomePageForm;
