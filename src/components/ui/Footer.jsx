import React from 'react';
import { Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
          <Car className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
          <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Voyago Xplorer
          </span>
        </div>
        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Premium travel experiences, redefined.</p>
        <div className="flex justify-center space-x-6 text-xs sm:text-sm text-gray-500">
          <span>&copy; 2024 Voyago Xplorer. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;