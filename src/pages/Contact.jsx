import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">We'd love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-amber-600 h-5 w-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-amber-600 h-5 w-5" />
                  <span>praveenkumar06me@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-amber-600 h-5 w-5" />
                  <span>West Bengal, India</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>8:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}