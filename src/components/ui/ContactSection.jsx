import React, { useState } from 'react';
import { Phone, Check } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    duration: '',
    requirements: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Contact us directly at +91 884 850 4781 or +91 96562 50794 for bookings!');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Primary Contact',
      value: '+91 884 850 4781',
      href: 'tel:+918848504781'
    },
    {
      icon: Phone,
      title: 'Alternative Contact',
      value: '+91 96562 50794',
      href: 'tel:+919656250794'
    }
  ];

  const whyChooseUs = [
    'Premium comfort with pushback seats',
    'Professional maintenance and service',
    'Experienced and reliable drivers',
    'Competitive pricing for premium service'
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-300">Ready to book your premium travel experience?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 rounded-xl flex-shrink-0">
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">{contact.title}</p>
                      <a 
                        href={contact.href} 
                        className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Why Choose Voyago Xplorer?</h4>
              <ul className="space-y-3 text-gray-300">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Quick Enquiry</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                />
                <select 
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                >
                  <option value="">Duration</option>
                  <option value="half-day">Half Day</option>
                  <option value="full-day">Full Day</option>
                  <option value="multi-day">Multi Day</option>
                </select>
              </div>
              <div>
                <textarea
                  rows="4"
                  name="requirements"
                  placeholder="Additional Requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all transform hover:scale-105 text-sm sm:text-base"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;