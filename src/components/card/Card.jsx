import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ data }) => {
  if (data === null) return null;
  return (
    <>
      {data.map((product) => (
        <Link to={`product/${product.id}`} key={product.id} className={styles.card}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />

          <p>{product.nome}</p>
        </Link>
      ))}
    </>
  );
};

export default Card;
