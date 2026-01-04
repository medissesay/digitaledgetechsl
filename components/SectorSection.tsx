
import React from 'react';
import { SectorData } from '../types';

interface SectorSectionProps {
  sector: SectorData;
  reverse?: boolean;
}

const SectorSection: React.FC<SectorSectionProps> = ({ sector, reverse = false }) => {
  return (
    <section id={sector.id} className="py-20 bg-white even:bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <img
                src={sector.image}
                alt={sector.title}
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm tracking-wide uppercase">
              {sector.type}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              {sector.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {sector.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">{service}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorSection;
