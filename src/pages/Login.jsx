import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center pt-20">
      <div className="min-h-screen bg-black/50 flex items-center">
        <div className="max-w-md mx-auto px-4 py-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8"
          >
            <div className="flex justify-center mb-6">
              <FaCoffee className="h-12 w-12 text-amber-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-center mb-2">
              {isLogin ? 'Welcome Back!' : 'Join The Amigos'}
            </h1>
            
            <p className="text-center text-gray-600 mb-8">
              {isLogin 
                ? "Where every sip tells a story, and every visit feels like coming home."
                : "Begin your journey with us and discover the perfect blend of community and coffee."}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-white/50"
                    required
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 bg-white/50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 bg-white/50"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition duration-300"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            
            <p className="mt-4 text-center text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-amber-600 hover:text-amber-700 font-semibold"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}