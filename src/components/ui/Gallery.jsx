import React, { useState } from 'react';
import { Play, Image, ChevronLeft, ChevronRight } from 'lucide-react';
import trav1 from '../../assets/homeimage.png';
import trav2 from '../../assets/traveler.jpeg';
import trav3 from '../../assets/trav.jpeg';
import travi from '../../assets/travellerinnerlig.jpeg';
import travVid1 from '../../assets/vyogervid.mp4';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sampleImages = [
    trav1,trav2,trav3,travi
  ];

  const sampleVideos = [
  travVid1,
];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sampleImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sampleImages.length) % sampleImages.length);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Gallery</h2>
          <p className="text-lg sm:text-xl text-gray-300">Take a closer look at our premium traveller</p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full transition-all text-sm sm:text-base ${
                activeTab === 'photos'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Image className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full transition-all text-sm sm:text-base ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Play className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Videos
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        {activeTab === 'photos' && (
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20">
              <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
                <img
                  src={sampleImages[currentImageIndex]}
                  alt="Voyago Xplorer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {sampleImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {sampleImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 sm:h-24 md:h-32 rounded-lg sm:rounded-xl overflow-hidden transition-all transform hover:scale-105 ${
                    index === currentImageIndex ? 'ring-2 sm:ring-4 ring-purple-400' : ''
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

       {activeTab === 'videos' && (
        <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20">
            <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
                <video
                key={sampleVideos[currentImageIndex % sampleVideos.length]} 
                src={sampleVideos[currentImageIndex % sampleVideos.length]}
                controls
                autoPlay={false}
                className="w-full h-full object-cover"
                />
                <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
                >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
                >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
            </div>
            </div>

            {/* Thumbnails for videos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
            {sampleVideos.map((vid, index) => (
                <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-20 sm:h-24 md:h-32 rounded-lg sm:rounded-xl overflow-hidden transition-all transform hover:scale-105 ${
                    index === currentImageIndex ? 'ring-2 sm:ring-4 ring-purple-400' : ''
                }`}
                >
                <video src={vid} className="w-full h-full object-cover" muted />
                </button>
            ))}
            </div>
        </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;