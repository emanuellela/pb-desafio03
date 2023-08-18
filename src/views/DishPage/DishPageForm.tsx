import React, { useState, useEffect } from 'react';
import { Logo } from '../../components/Logo/Logo';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa';
import { ReactComponent as BagIcon } from '../HomePage/icons/bag.svg';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import './DishPageForm.css'; 
import { Link } from 'react-router-dom';
import { ReactComponent as GreenStar } from '../HomePage/icons/green-star.svg';
import CardDish from '../../components/CardDish/CardDish'; 
import { cardImagesDishes } from '../../UI/imagesPath';
import dishPageImage from './images/lunch.png'; 

interface CardData {
  node: {
    objectId: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }
}

interface DishFormProps {
  backUrl?: string;
}

const DishPageForm: React.FC<DishFormProps> = ({ backUrl }) => {
  const [numColumns, setNumColumns] = useState(4);
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBagOpen, setIsBagOpen] = useState(false); // Bag state
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]); // Estado para os cards filtrados

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setNumColumns(1);
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
          query Dishes {
            dishes {
              edges {
                  node {
                    id
                    objectId
                    createdAt
                    updatedAt
                    name
                    price
                    image
                    description
                    query
                    variables                
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
        const cardData = response.data.data.Dishes.edges;

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
      <header className="dish-header">
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

      <div className='dish-page'>
        <div className='lunch-page'>
          <img src={dishPageImage} alt="" className="dishp-image" />
          <div className="dish-container">
            <div className="group-text">
              <h1 className="title-lunchbox">
                LunchBox - Meals and Thalis
              </h1>
              <p>
                North Indian, Punjabi
              </p>
              <div className='column-text'>
                <div className='one-lunch'>
                  <GreenStar />
                  <p>4.0</p>
                  <p>100+ ratings</p>
                </div>
                <div className='two-lunch'>
                  <p>30 Mins</p>
                  <p>Delivery Time</p>
                </div>
                <div className='three-lunch'>
                  <p>₹200</p>
                  <p>Cost for two</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>Offers</h3>
          <p>50% off up to ₹100 | Use code TRYNEW</p>
          <p>20% off | Use code PARTY</p>
        </div>
      </div>

      <div className='recommended'>
            <p>Recommended</p>
        <div>

      <div className='middle-page'>
          <p>Breakfast Box</p>
          <p>Lunch Box</p>
          <p>Combo Box</p> 
          <p>Biriyani Box</p>
          </div>
        </div>
      </div>

      <div className="dish-cards-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="dish-cards-grid">
          {filteredAndSortedCards.slice(0, 8).map((card) => (
            <CardDish
              key={card.node.objectId}
              objectId={card.node.objectId}
              name={card.node.name}
              price={card.node.price}
              description={card.node.description}
              // Seleciona uma imagem aleatória
              image={cardImagesDishes[Math.floor(Math.random() * cardImagesDishes.length)]}
            />
          ))}
        </div>
      )}
    </div>
    <Footer />
  </div>
);};

export default DishPageForm;