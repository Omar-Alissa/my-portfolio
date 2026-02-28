import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#21363b] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold hover:text-[#a3a380] transition-colors">
            Omar Dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-[#a3a380] transition-colors">
              Home
            </Link>
            <a href="#skills" className="hover:text-[#a3a380] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#a3a380] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#a3a380] transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 pb-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#a3a380] transition-colors">
              Home
            </Link>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#a3a380] transition-colors">
              Skills
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#a3a380] transition-colors">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#a3a380] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;