import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const isHome = location.pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={scrollToTop}
          aria-label="DayFlow Assistant"
        >
          <span className="text-xl sm:text-2xl font-display font-bold text-pulse-500">DayFlow</span>
          <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">by PseudoSoft</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {isHome ? (
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
          ) : (
            <Link to="/" className="nav-link">
              Home
            </Link>
          )}

          {isHome ? (
            <a href="#features" className="nav-link">About</a>
          ) : (
            <Link to="/#features" className="nav-link">About</Link>
          )}

          {isHome ? (
            <a href="#details" className="nav-link">Contact</a>
          ) : (
            <Link to="/#details" className="nav-link">Contact</Link>
          )}

          <Link 
            to="/pricing" 
            className={`nav-link ${location.pathname === "/pricing" ? "text-pulse-500 font-semibold" : ""}`}
          >
            Pricing
          </Link>
        </nav>

        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <Link 
            to="/" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              scrollToTop();
              handleNavClick();
            }}
          >
            Home
          </Link>
          
          {isHome ? (
            <a 
              href="#features" 
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={handleNavClick}
            >
              About
            </a>
          ) : (
            <Link 
              to="/#features" 
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={handleNavClick}
            >
              About
            </Link>
          )}

          {isHome ? (
            <a 
              href="#details" 
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={handleNavClick}
            >
              Contact
            </a>
          ) : (
            <Link 
              to="/#details" 
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={handleNavClick}
            >
              Contact
            </Link>
          )}

          <Link 
            to="/pricing" 
            className={`text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 ${
              location.pathname === "/pricing" ? "text-pulse-500 font-semibold" : ""
            }`}
            onClick={handleNavClick}
          >
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
