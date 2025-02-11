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
          <p className="mt-4 text-xl text-gray-600">A Journey of Passion and Innovation</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-gray-600 mb-6">
              Praveen, the visionary founder of The Amigos, brings over a decade of passion for coffee and community building. With a background in engineering and an unwavering commitment to quality, he transformed his love for coffee into a welcoming space where people can connect, create, and enjoy exceptional beverages.
            </p>
            <p className="text-gray-600">
              Starting from a small corner shop in West Bengal, Praveen's dedication to sourcing the finest beans and creating innovative coffee experiences has made The Amigos a beloved destination for coffee enthusiasts and casual visitors alike. His philosophy of "community first" has shaped every aspect of our café, from our carefully crafted menu to our warm, inviting atmosphere.
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