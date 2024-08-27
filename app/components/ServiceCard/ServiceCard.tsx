// components/ServiceCard.tsx
import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, imageUrl, onSelect }) => {
  return (
    <div className={styles.card} onClick={onSelect}>
      <p className={styles.price}>${price}</p>
      <h3 className={styles.title}>{title}</h3>
      <img src={imageUrl} alt={title} className={styles.image} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
