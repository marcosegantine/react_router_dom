import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
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
    <div className={styles.container}>
      <Head title="Ranek" />
      <Card data={data}/>
    </div>
  );
};

export default Home;
