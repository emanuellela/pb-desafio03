import React from 'react';
import styles from './CardDish.module.css';
import { cardImagesDishes } from '../../UI/imagesPath';
import { ReactComponent as AddMore } from '../../views/DishPage/icons/add-more.svg';

//<GreenStar />
interface CardDishProps {
  objectId: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const CardDish: React.FC<CardDishProps> = ({ objectId, name, price, image, description }) => {
  const randomImage = cardImagesDishes[Math.floor(Math.random() * cardImagesDishes.length)]; //Imagem aleatória
  return (
    <div className={`${styles.card} ${styles['card-bg2']}`}>
      <div>
        <h2 className={styles['card-name2']}>{name}</h2>
        <p className={styles['card-description']}>{description}</p>
        <p className={styles['card-price']}>{price}</p>
        <img src={image} alt={name} className={styles['card-img2']} />
        <span className={styles['add-more']}>
          <AddMore />
        </span>
        {image}
      </div>
    </div>
  );
};

export default CardDish;