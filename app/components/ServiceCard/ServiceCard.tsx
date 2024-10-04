// components/ServiceCard.tsx
import React from 'react';
import styles from './ServiceCard.module.css';
import Image from 'next/image';

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
      <Image src={imageUrl} alt={title} className={styles.image} width={500} height={1} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
