import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HorizontalPortfolio from './components/HorizontalPortfolio';
import Services from './components/Services';
import Process from './components/Process';
import TechStack from './components/TechStack';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (User requested to keep this)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen bg-white text-black font-sans scroll-smooth">
        <Navbar />
        <Hero />
        <HorizontalPortfolio />
        <Services />
        <Process />
        <TechStack />
        <About />
        <FAQ />

        {/* Call to Action Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to elevate your <br />digital presence?</h2>
                <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:bg-orange-500 hover:text-white">
                  Get A Free Consultation
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
