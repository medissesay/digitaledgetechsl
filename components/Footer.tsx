
import React from 'react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-gray-400 max-w-sm mb-4">
              A diversified technology and services company leading the digital transformation in the region through education, media, and financial solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Photo Studio</li>
              <li>Computer School</li>
              <li>Printing Press</li>
              <li>Global Remittance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>HQ: SL Ltd. Headquarters</li>
              <li>info@digitaledge-sl.com</li>
              <li>+232 Support Line</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
