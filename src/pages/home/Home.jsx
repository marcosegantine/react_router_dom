import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Head from '../../components/head/Head';
import Card from '../../components/card/Card';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = 'http://ranekapi.origamid.dev/json/api/produto';

  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct(url);
  }, []);
  if (isLoading) return <div className="loading"></div>;
  return (
    <section className={styles.container + ' animeLeft'}>
      <Head title="Ranek" />
      <Card data={data} />
    </section>
  );
};

export default Home;
