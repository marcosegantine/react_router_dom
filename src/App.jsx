import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Contact from './pages/contact/Contact';
import { useEffect, useState } from 'react';

const data = [
  {
    nome: 'marcos',
  },
];

function App() {
  

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
