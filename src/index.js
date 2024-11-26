import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartContextprovider } from './context/CartContext';
import Color from './ColorChange Program/Color';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <CartContextprovider>
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<App />} />
   <Route path="color" element={<Color />} />
   
   </Routes>
    
  </BrowserRouter>
  
  </CartContextprovider>
 
);

