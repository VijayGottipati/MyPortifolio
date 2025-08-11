import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import { YOUR_NAME } from '../utils/constants';
import { socials } from '../data/socials';

const Hero = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FaGithub':
        return FaGithub;
      case 'FaLinkedin':
        return FaLinkedin;
      case 'FaTwitter':
        return FaTwitter;
      case 'FaGlobe':
        return FaGlobe;
      default:
        return FaGlobe;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary-400 text-lg font-medium"
              >
                Hi, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                {YOUR_NAME}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                A passionate Machine Learning Engineer and Full-Stack Developer specializing in AI, 
                computer vision, and large language models. I love building innovative solutions 
                that make a difference.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex space-x-4"
            >
              {socials.map((social) => {
                const IconComponent = getIconComponent(social.icon);
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-800 hover:bg-primary-500/20 border border-gray-700 hover:border-primary-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-80 h-80 md:w-96 md:h-96"
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>

                {/* Professional Photo */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/vijay-photo.jpeg"
                    alt="Vijay Gottipati"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-center p-8">
                          <div class="w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center mb-4">
                            <span class="text-4xl font-bold text-primary-400">VG</span>
                          </div>
                          <p class="text-gray-400 text-sm">Vijay Gottipati</p>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Floating elements around photo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-4 left-1/4 w-8 h-8 bg-primary-500/30 rounded-lg backdrop-blur-sm"></div>
                  <div className="absolute -right-4 top-1/3 w-6 h-6 bg-accent-500/30 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute -bottom-4 right-1/4 w-10 h-10 bg-green-500/30 rounded-lg backdrop-blur-sm"></div>
                  <div className="absolute -left-4 bottom-1/3 w-7 h-7 bg-purple-500/30 rounded-full backdrop-blur-sm"></div>
                </motion.div>
              </motion.div>


            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 