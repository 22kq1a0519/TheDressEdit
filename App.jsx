import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* You can add more routes like About, Contact, Products later */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
