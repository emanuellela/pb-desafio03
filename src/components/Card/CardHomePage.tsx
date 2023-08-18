import React from 'react';
import styles from './CardHomePage.module.css'; // Importando os estilos do CSS
import { ReactComponent as GreenStar } from '../../views/HomePage/icons/green-star.svg';
import { ReactComponent as GetCard } from '../../views/HomePage/icons/get-card.svg';
import { cardImages } from '../../UI/imagesPath';

interface CardProps {
  objectId: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  deliveryTime: string;
}

const Card: React.FC<CardProps> = ({ objectId, name, location, image, rating, deliveryTime }) => {
  const randomImage = cardImages[Math.floor(Math.random() * cardImages.length)]; // Seleciona uma imagem aleatória
  return (
    <div className={`${styles.card} ${styles['card-with-bg']}`}>
      <img src={image} alt={name} className={styles['card-image']} />
      <h2 className={styles['card-name']}>{name}</h2>
      <div className={styles['card-info']}>
        <p className={styles['card-location']}>{location}</p>
        <div className={styles['card-rating']}>
          <span className={styles['star-icon']}>
            <GreenStar />
          </span>
          {rating}
        </div>
      </div>
      <div className={`${styles['card-deliveryt']} ${styles['centered-text']}`}>
        <span className={styles['get-card']}>
          <GetCard />
        </span>
        {deliveryTime}
      </div>
    </div>
  );
};

export default Card;