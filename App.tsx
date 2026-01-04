
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectorSection from './components/SectorSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { SECTORS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Summary */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Core Divisions</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Driving revenue through four specialized sectors
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SECTORS.map((sector) => (
                <div key={sector.id} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm h-full hover:shadow-md transition-shadow">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg text-white font-bold">
                        {sector.type.substring(0, 1)}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{sector.title}</h3>
                      <p className="mt-5 text-sm text-gray-500 line-clamp-2">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Sector Detail Sections */}
        {SECTORS.map((sector, index) => (
          <SectorSection 
            key={sector.id} 
            sector={sector} 
            reverse={index % 2 !== 0} 
          />
        ))}

        {/* User Testimonials Section */}
        <Testimonials />

        {/* Contact/CTA */}
        <section className="bg-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to take your project to the Digital Edge?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Visit our center today or talk to our AI assistant to get started.
            </p>
            <div className="mt-10">
              <a
                href="mailto:contact@digitaledge-sl.com"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Chat widget */}
      <AIChat />
    </div>
  );
};

export default App;
