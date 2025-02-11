import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Cafe interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Café Delight</h1>
          <p className="text-xl mb-8">Experience the perfect blend of artisanal coffee and delicious pastries in a cozy atmosphere.</p>
          <Link to="/menu">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition duration-300">
              View Menu
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}