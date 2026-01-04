
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Empowering the Future of</span>{' '}
              <span className="block text-blue-600 xl:inline">Technology in SL</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Digital Edge Technologies SL Ltd. is your one-stop hub for professional media, advanced technical education, premium printing, and global financial services.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <a
                href="#photo-studio"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://picsum.photos/seed/tech/800/600"
                alt="Technology Center"
              />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
