import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-purple-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
        Sarvadnya's FairMee
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-200 transition">Products</Link>
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 text-white px-4 pb-4">
          <Link to="/" onClick={toggleMenu} className="block py-2 border-b border-blue-500">Home</Link>
          <Link to="/products" onClick={toggleMenu} className="block py-2 border-b border-blue-500">Products</Link>
          <Link to="/about" onClick={toggleMenu} className="block py-2 border-b border-blue-500">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="block py-2">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
