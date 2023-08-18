import React from 'react';
import styles from './CardHomePage.module.css';

interface CardProps {
  objectId: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  deliveryTime: string;
}

const Card: React.FC<CardProps> = ({ objectId, name, location, image, rating, deliveryTime }) => {
  return (
    <div className={styles.card}>
      <img src= {image} ></img>
      <h2 className={styles['card-name']}>{name}</h2>
      <p className={styles['card-location']}>{location}</p>
      <p className={styles['card-']}>{location}</p>
      <p className={styles['card-location']}>{location}</p>
    </div>
  );
};

export default Card;
