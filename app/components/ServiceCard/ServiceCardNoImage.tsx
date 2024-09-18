// components/ServiceCard.tsx
import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  price: number;
  description: string;
  onSelect: () => void;
}

const ServiceCardNoImage: React.FC<ServiceCardProps> = ({ title, price, description, onSelect }) => {
  return (
    <div className={styles.card} onClick={onSelect}>
      <p className={styles.price}>${price}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCardNoImage;
