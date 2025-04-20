import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About/Brand Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Sarvadnya's FairMee</h2>
          <p className="text-sm">
            Empowering fair trade and ethical products. Join us in making a difference, one purchase at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><Link to="/" className="hover:text-blue-200 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-200 transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-200 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: Sudarshancosmetics@gmail.com</p>
          <p>Phone: +91 82177 44234</p>
          <p>Location: Shirpur, Maharashtra, India</p>
        </div>
      </div>

      <div className="bg-purple-950 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Sarvadnya's FairMee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
