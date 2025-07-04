import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signUp/SignUp';
import About from './landing_page/about/AboutPage';
import Products from './landing_page/product/ProductsPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signUp/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="signup" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="products" element={<Products/>}></Route>
      <Route path="pricing" element={<Pricing/>}></Route>
      <Route path="support" element={<Support/>}></Route>
      <Route path="*" element={<NotFound/>}> </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

