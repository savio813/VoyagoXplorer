import React from 'react';
import homeimage from '../../assets/darktheame.png';

const HeroSection = ({ setShowEnquiryForm }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

      {/* Background with imported image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeimage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent block">
            Voyago
          </span>
          <span className="text-white block">Xplorer</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Premium 12-seater traveller with luxury amenities. Your journey, elevated.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button
            onClick={() => setShowEnquiryForm(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
          >
            Start Your Journey
          </button>
          <button
            onClick={() =>
              document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="border-2 border-white/30 hover:border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:bg-white/10 backdrop-blur-sm"
          >
            View Gallery
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
