import { motion } from 'framer-motion';
import { FaCoffee, FaCookie, FaWifi } from 'react-icons/fa';

const features = [
  {
    icon: FaCoffee,
    title: 'Premium Coffee',
    description: 'Sourced from the finest beans around the world'
  },
  {
    icon: FaCookie,
    title: 'Fresh Pastries',
    description: 'Baked daily in our kitchen'
  },
  {
    icon: FaWifi,
    title: 'Free Wi-Fi',
    description: 'Stay connected while you enjoy'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <feature.icon className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}