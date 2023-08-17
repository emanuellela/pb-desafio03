import React from 'react';
import styles from './CardHomePage.module.css';

interface CardProps {
  title: string;
  description: string;
  hpageImages: string[];//array de urls das imagens
}

const Card: React.FC<CardProps> = ({ title, description, hpageImages }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-image']}>
        {hpageImages.map((imageSrc, index) => (
          <img key={index} src={imageSrc} alt={`Image ${index}`} />
        ))}
      </div>
      <h2 className={styles['card-title']}>{title}</h2>
      <p className={styles['card-description']}>{description}</p>
    </div>
  );
};

export default Card;
