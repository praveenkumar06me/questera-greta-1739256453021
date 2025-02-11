import { motion } from 'framer-motion';
import { FaCoffee, FaHeart, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Our Story</h1>
          <p className="mt-4 text-xl text-gray-600">Brewing happiness since 2010</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Cafe interior"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Café Delight, we believe in creating more than just great coffee. We're passionate about crafting memorable experiences, fostering community connections, and serving up moments of joy with every cup we pour.
            </p>
            <p className="text-gray-600">
              Founded in 2010, our café has grown from a small corner shop into a beloved community hub, thanks to our dedication to quality, sustainability, and exceptional service.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FaCoffee,
              title: "Quality First",
              description: "We source only the finest beans and ingredients"
            },
            {
              icon: FaHeart,
              title: "Made with Love",
              description: "Every drink is crafted with care and attention"
            },
            {
              icon: FaUsers,
              title: "Community Focus",
              description: "We're proud to be part of our local community"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <item.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}