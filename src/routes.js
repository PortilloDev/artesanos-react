import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Podcast from './pages/Podcast/Podcast';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default AppRoutes;