import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { research } from '../data/research';
import SectionHeader from './SectionHeader';

const Research = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Research"
        title="Publications"
        description="My research contributions and academic publications"
      />
      
      <div className="space-y-6">
        {research.map((paper, index) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-primary-500/30 transition-colors duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-primary-400 transition-colors duration-200">
                  {paper.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                  <span>{paper.venue}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{paper.year}</span>
                  {paper.doi && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>DOI: {paper.doi}</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                {paper.doi && (
                  <motion.a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/30 hover:border-primary-500/50 text-primary-300 hover:text-primary-200 rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    DOI
                  </motion.a>
                )}
                
                {paper.link && (
                  <motion.a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-accent-500/20 hover:bg-accent-500/30 border border-accent-500/30 hover:border-accent-500/50 text-accent-300 hover:text-accent-200 rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Link
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Research; 