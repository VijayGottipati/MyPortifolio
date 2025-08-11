import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    const initializeVisitorCount = async () => {
      try {
        // First, get the current count
        const currentCount = await apiService.getVisitorCount();
        setVisitorCount(currentCount.count);
        
        // Check if we've already incremented for this session
        const hasVisited = sessionStorage.getItem('portfolio_visited');
        
        if (!hasVisited) {
          // Increment the count for new visitor
          const newCount = await apiService.incrementVisitorCount();
          setVisitorCount(newCount.count);
          setHasIncremented(true);
          
          // Mark as visited in this session
          sessionStorage.setItem('portfolio_visited', 'true');
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

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2 text-white shadow-lg"
      >
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm">Loading...</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2 text-white shadow-lg"
    >
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium">
          No. of Visitors | {visitorCount.toLocaleString()}
        </span>
        {hasIncremented && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-2 h-2 bg-primary-500 rounded-full"
          />
        )}
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
