import React from 'react';
import { Phone } from 'lucide-react';

const EnquiryModal = ({ showEnquiryForm, setShowEnquiryForm }) => {
  if (!showEnquiryForm) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 sm:p-8 max-w-md w-full border border-white/20 mx-4">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Quick Booking</h3>
          <button
            onClick={() => setShowEnquiryForm(false)}
            className="text-gray-400 hover:text-white text-xl sm:text-2xl"
          >
            ×
          </button>
        </div>
        <div className="text-center space-y-4">
          <p className="text-gray-300 text-sm sm:text-base">Contact us directly for instant booking</p>
          <div className="space-y-3">
            <a
              href="tel:+918848504781"
              className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl transition-all text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>+91 884 850 4781</span>
            </a>
            <a
              href="tel:+919656250794"
              className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition-all text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>+91 96562 50794</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;