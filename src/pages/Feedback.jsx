import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { rating, feedback });
    // Here you would typically send the feedback to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-8">Your Feedback</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              <p className="text-lg mb-2">Rate your experience</p>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <button
                      type="button"
                      key={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                      className="focus:outline-none"
                    >
                      <FaStar
                        className="h-8 w-8"
                        color={ratingValue <= (hover || rating) ? "#F59E0B" : "#D1D5DB"}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Comments
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 h-32"
                placeholder="Tell us about your experience..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}