import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Archive from './components/Archive';
import SocialGallery from './components/SocialGallery';
import Location from './components/Location';
import Leagues from './components/Leagues';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DemoModal from './components/DemoModal';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
        <SocialGallery />
        <Location />
        <Leagues />
        <Pricing />
        <FAQ />
      </main>
      <WhatsAppButton />
      <DemoModal />
      <Footer />
    </div>
  );
}

export default App;
