import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const menuItems = {
  coffee: [
    {
      id: 1,
      name: 'Espresso',
      price: 3.50,
      description: 'Rich and bold single shot',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Cappuccino',
      price: 4.50,
      description: 'Espresso with steamed milk and foam',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Latte',
      price: 4.50,
      description: 'Espresso with lots of steamed milk and light foam',
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Mocha',
      price: 5.00,
      description: 'Espresso with chocolate and steamed milk',
      image: 'https://images.unsplash.com/photo-1578314675249-a6910f80239c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ],
  pastries: [
    {
      id: 5,
      name: 'Croissant',
      price: 3.50,
      description: 'Buttery, flaky pastry',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Chocolate Muffin',
      price: 3.00,
      description: 'Rich chocolate muffin',
      image: 'https://images.unsplash.com/photo-1586989315438-6e511e7e9990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      name: 'Cinnamon Roll',
      price: 4.00,
      description: 'Fresh baked with cream cheese frosting',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'Apple Danish',
      price: 3.75,
      description: 'Flaky pastry with fresh apple filling',
      image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]
};

export default function Menu() {
  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id);
    
    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...item, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Our Menu</h1>
          <p className="mt-4 text-xl text-gray-600">Crafted with love and passion</p>
        </motion.div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Coffee</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.coffee.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-amber-600 font-bold mb-2">${item.price.toFixed(2)}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition duration-300"
                        >
                          <FaShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Pastries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.pastries.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-amber-600 font-bold mb-2">${item.price.toFixed(2)}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition duration-300"
                        >
                          <FaShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}