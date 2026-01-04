
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((currentIndex + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Client Success</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Hundreds across the Region
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500">
            {/* Quote Icon */}
            <div className="absolute top-0 right-12 transform -translate-y-1/2">
              <div className="bg-blue-600 rounded-2xl p-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.9124 14 13.017 13.1046 13.017 12V6C13.017 4.89543 13.9124 4 15.017 4H20.017C21.1216 4 22.017 4.89543 22.017 6V12C22.017 13.1046 21.1216 14 20.017 14H20.017V16H22.017V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017V14H4.017C2.91243 14 2.017 13.1046 2.017 12V6C2.017 4.89543 2.91243 4 4.017 4H9.017C10.1216 4 11.017 4.89543 11.017 6V12C11.017 13.1046 10.1216 14 9.017 14H9.017V16H11.017V21H3.017Z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-50 shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6 font-medium">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-blue-600 font-semibold">{TESTIMONIALS[currentIndex].service} User</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-center items-center gap-6">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-md text-gray-400 hover:text-blue-600 hover:shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-md text-gray-400 hover:text-blue-600 hover:shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
