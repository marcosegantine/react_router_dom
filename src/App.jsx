import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Contact from './pages/contact/Contact';
import { useEffect, useState } from 'react';




function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
