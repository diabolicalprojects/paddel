import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Archive from './components/Archive';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="relative w-full bg-carbon min-h-screen text-white font-body selection:bg-padel selection:text-carbon">
      <div className="noise-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Manifesto />
        <Archive />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
