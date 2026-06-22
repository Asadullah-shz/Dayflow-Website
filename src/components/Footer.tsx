import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-100">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm order-2 md:order-1">
          © 2026 <span className="font-semibold text-gray-900">PseudoSoft Inc.</span> — Engineered by <span className="font-semibold text-gray-900">Asadullah Shahbaz</span>. DayFlow Assistant is licensed under the MIT License.
        </p>
        <div className="flex space-x-6 text-sm order-1 md:order-2">
          <Link to="/" className="text-gray-500 hover:text-pulse-500 transition-colors">Home</Link>
          <Link to="/pricing" className="text-gray-500 hover:text-pulse-500 transition-colors">Pricing</Link>
          <Link to="/demo" className="text-gray-500 hover:text-pulse-500 transition-colors">Demo</Link>
          <Link to="/#details" className="text-gray-500 hover:text-pulse-500 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
