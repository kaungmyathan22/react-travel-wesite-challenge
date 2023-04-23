import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Destinations from './components/Destinations';
import Booking from './components/Booking';
import Places from './components/Places';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  );
}

export default App;

function Home () {
  return (<div>
    <Navbar />
    <Hero />
    <Destinations />
    <Booking />
    <Places />
    <Carousel />
    <Footer />
  </div>);
}
