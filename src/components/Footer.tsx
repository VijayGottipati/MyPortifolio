import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { YOUR_NAME } from '../utils/constants';
import { apiService } from '../services/api';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeVisitorCount = async () => {
      try {
        // Check if we've already incremented for this session
        const hasVisited = sessionStorage.getItem('portfolio_visited');

        if (!hasVisited) {
          // Increment the count for new visitor
          const newCount = await apiService.incrementVisitorCount();
          setVisitorCount(newCount.count);

          // Mark as visited in this session
          sessionStorage.setItem('portfolio_visited', 'true');
        } else {
          // Just get the current count
          const currentCount = await apiService.getVisitorCount();
          setVisitorCount(currentCount.count);
        }
      } catch (error) {
        console.error('Failed to initialize visitor count:', error);
        // Fallback to a default count if API fails
        setVisitorCount(1234);
      } finally {
        setIsLoading(false);
      }
    };

    initializeVisitorCount();
  }, []);

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400">
              Made with ❤️ by <span className="text-primary-400 font-medium">{YOUR_NAME}</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 text-sm text-gray-400"
          >
            <span>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                  Loading visitors...
                </span>
              ) : (
                `No. of Visitors | ${visitorCount.toLocaleString()}`
              )}
            </span>
            <span>•</span>
            <span>© 2025 All rights reserved</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 