import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCoffee, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar({ cartCount = 0 }) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <FaCoffee className="h-8 w-8 text-amber-700" />
            <span className="text-xl font-bold text-amber-900">Café Delight</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-700">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-amber-700">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-700">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-700">Contact</Link>
            <Link to="/feedback" className="text-gray-700 hover:text-amber-700">Feedback</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/checkout" className="relative">
              <FaShoppingCart className="h-6 w-6 text-amber-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login">
              <FaUser className="h-6 w-6 text-amber-700" />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}