import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Head from '../../components/head/Head';
import Card from '../../components/card/Card';

const Home = () => {
  const [data, setData] = useState([]);

  const url = 'http://ranekapi.origamid.dev/json/api/produto';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <section className={styles.container  + ' animeLeft'}>
      <Head title="Ranek | Home"/>
      <Card data={data}/>
    </section>
  );
};

export default Home;
