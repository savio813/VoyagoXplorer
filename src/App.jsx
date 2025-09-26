import React, { useState } from 'react';
import Navigation from './components/ui/Navigation';
import HeroSection from './components/ui/HeroSection';
import FeaturesSection from './components/ui/FeaturesSection';
import Gallery from './components/ui/Gallery';
import ContactSection from './components/ui/ContactSection';
import Footer from './components/ui/Footer';
import EnquiryModal from './components/ui/EnquiryModal';
import './App.css'

function App() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation showEnquiryForm={showEnquiryForm} setShowEnquiryForm={setShowEnquiryForm} />
      <HeroSection setShowEnquiryForm={setShowEnquiryForm} />
      <FeaturesSection />
      <Gallery />
      <ContactSection />
      <Footer />
      <EnquiryModal showEnquiryForm={showEnquiryForm} setShowEnquiryForm={setShowEnquiryForm} />
    </div>
  );
}

export default App;