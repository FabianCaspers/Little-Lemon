import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Specials from './Specials'
import './App.css';

// Temporäre leere Komponenten
const About = () => <div>About Seite</div>;
const Services = () => <div>Services Seite</div>;
const Contact = () => <div>Contact Seite</div>;

function App() {
  return (
    <Router>
      <div className="Container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Specials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
