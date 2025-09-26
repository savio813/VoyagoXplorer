import React from 'react';
import { Users, Car, Shield, Award } from 'lucide-react';

const FeatureCard = ({ feature, index }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
        <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{feature.desc}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: Users, title: '12 Seater Capacity', desc: 'Comfortable seating for up to 12 passengers' },
    { icon: Car, title: '2017 Model', desc: 'Well-maintained premium vehicle' },
    { icon: Shield, title: 'Air Conditioned', desc: 'Full AC with pushback seats for comfort' },
    { icon: Award, title: 'Premium Interior', desc: 'Full interior work by Josh, Audio by Varmas' }
  ];

  const specs = [
    { value: '2017', label: 'Model Year', color: 'text-purple-400' },
    { value: '12', label: 'Seater Capacity', color: 'text-pink-400' },
    { value: 'AC', label: 'Climate Control', color: 'text-purple-400' },
    { value: '★★★★★', label: 'Premium Interior', color: 'text-pink-400' }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Premium Features</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience luxury travel with our meticulously maintained 2017 model traveller
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Specifications */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Vehicle Specifications</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold ${spec.color} mb-2`}>{spec.value}</div>
                <div className="text-gray-300 text-sm sm:text-base">{spec.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center space-y-2 sm:space-y-4">
            <p className="text-gray-300 text-sm sm:text-lg">
              <span className="text-purple-400 font-semibold">Interior Work:</span> Professionally done by Josh
            </p>
            <p className="text-gray-300 text-sm sm:text-lg">
              <span className="text-pink-400 font-semibold">Audio System:</span> Premium setup by Varmas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;