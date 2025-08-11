import { motion } from 'framer-motion';

const Background3D = () => {
  return (
    <>
      {/* Gradient background */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{ 
          zIndex: -3,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
          `
        }}
      />

      {/* Floating geometric shapes and code elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 rounded"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ 
            background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.05))',
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/3 w-6 h-6 border border-pink-400/30 rounded-full"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
          style={{ 
            background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.1), rgba(255, 0, 255, 0.05))',
          }}
        />

        {/* Floating code snippets */}
        <motion.div
          className="absolute top-10 left-10 text-green-400/20 font-mono text-xs select-none"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          01001000 01100101 01101100 01101100 01101111
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 text-blue-400/20 font-mono text-xs select-none"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          function hello() return end
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 text-purple-400/20 font-mono text-xs select-none"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          class Computer extends Science
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-5 text-cyan-400/15 font-mono text-xs select-none"
          animate={{ x: [0, 10, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          import React from react
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-10 text-yellow-400/15 font-mono text-xs select-none"
          animate={{ x: [0, -10, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          const data = await fetch api
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/3 text-red-400/15 font-mono text-xs select-none"
          animate={{ y: [0, 10, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          console.log debug mode
        </motion.div>
      </div>
    </>
  );
};

export default Background3D;
