import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../../components/head/Head';
import styles from './Product.module.css';

const Product = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (isLoading) return <div className='loading'></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <section className={styles.product + ' animeLeft'}>
      <Head title={`Ranek | ${product.nome}`} />
      <div className={styles.content}>
        {product.fotos.map((picture) => (
          <img src={picture.src} alt={picture.titulo} key={picture.titulo} />
        ))}
      </div>
      <div className={styles.productData}>
        <h1>{product.nome}</h1>
        <span className={styles.price}>£ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
