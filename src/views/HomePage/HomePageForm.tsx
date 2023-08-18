import React, { useState, useEffect } from 'react';
import { Logo } from '../../components/Logo/Logo';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa';
import { ReactComponent as BagIcon } from './icons/bag.svg';
import appleIcon from './images/apple.png';
import bananaIcon from './images/banana.png';
import Card from '../../components/Card/CardHomePage';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import './HomePageForm.css';
import homePageImage from './images/home-page.png'; 
import homePageDetail from './images/detail.png'; 
import { cardImages } from '../../UI/imagesPath';

import { Link } from 'react-router-dom';

interface CardData {
  node: {
    objectId: string;
    name: string;
    rating:number;
    deliveryTime: string;
    image: string;
    location: string;
  }
}

interface HomePageFormProps {
  backUrl?: string;
}

const HomePageForm: React.FC<HomePageFormProps> = ({ backUrl }) => {
  const [numColumns, setNumColumns] = useState(4);
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBagOpen, setIsBagOpen] = useState(false); // Bag state

  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]); // Estado para os cards filtrados

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
          query GetAllRestaurants {
            fitMes {
              count
              edges {
                node {
                  objectId
                  name
                  rating
                  deliveryTime
                  image
                  location
                }
              }
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
        console.log(response);
        const cardData = response.data.data.fitMes.edges;

        console.log('Card data:', cardData);
        setCards(cardData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCards();
  }, []);

  const handleSearch = () => {
    // Filtrar os cards pelo nome
    const filtered = cards.filter((card) =>
      card.node.name && card.node.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCards(filtered);
  };

  const filteredAndSortedCards = filteredCards.filter((card) =>
    card.node.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="homep-header">
        <Logo />
        <div className='barra-icon'>
        <BarraPesquisa value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onSearch={handleSearch} />
        <div className="bag-button"> {/*onClick={handleBagClick}*/} 
          {/* Render the bag SVG */}
          <BagIcon />
        </div>
        <Link to="/login" className="signin-button">
          Sign In
        </Link>
      </div>
      </header>

      {isBagOpen && (
        <div className="bag-content">
          {/* Content of the bag */}
          {/* Items, total, etc. here */}
        </div>
      )}

      

      <div className='home-page'>
        <div className='img-detail'>
            <img src={homePageDetail} alt="" className="homep-detail" />
        </div>
        <div className="homep-container">
          <div className="form-group-text">
            <h1 className="phrase">
              <span className="tx1">Premium </span>
              <span className="tx2">quality<br /></span>
              <span className="tx3">
                Food for your <img src={bananaIcon} alt="Banana Icon" className="imagem" />
              </span>{" "}
              <span className="tx4">healthy<br /></span>
              <span className="tx5"><img src={appleIcon} alt="Apple Icon" className="imagem" />& Daily Life</span>
            </h1>
          </div>

          <p className='ptext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br />
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br />
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <div className='img-homep'>
            <img src={homePageImage} alt="" className="homep-image" />
        </div>
      </div>

      <h1 className='page-title'>Restaurants</h1>

      <div className="homep-cards-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="homep-cards-grid">
          {filteredAndSortedCards.slice(0, 8).map((card) => (
            <Card
              key={card.node.objectId}
              name={card.node.name}
              objectId={card.node.objectId}
              location={card.node.location}
              rating={card.node.rating}
              // Seleciona uma imagem aleatória
              image={cardImages[Math.floor(Math.random() * cardImages.length)]}
              deliveryTime={card.node.deliveryTime}
            />
          ))}
        </div>
      )}
    </div>
    {/* ... */}
  </div>
);};

export default HomePageForm;