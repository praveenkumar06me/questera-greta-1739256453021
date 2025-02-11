import { useState } from 'react';
import Cart from '../components/Cart';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout() {
  const [items, setItems] = useState([
    { id: 1, name: 'Cappuccino', price: 4.50, quantity: 1 },
    { id: 2, name: 'Croissant', price: 3.50, quantity: 1 },
  ]);

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleCheckout = (formData) => {
    console.log('Processing order:', { items, formData });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Cart
            items={items}
            onRemove={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
          <CheckoutForm onSubmit={handleCheckout} />
        </div>
      </div>
    </div>
  );
}