import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../data/certifications';
import SectionHeader from './SectionHeader';

const Certifications = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Certifications"
        title="Professional Certifications"
        description="Industry-recognized certifications and qualifications"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-primary-500/30 transition-all duration-200"
          >
            <div className="space-y-4">
              {/* Certification Icon */}
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">📜</span>
              </div>
              
              {/* Certification Details */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white hover:text-primary-400 transition-colors duration-200">
                  {cert.name}
                </h3>
                <p className="text-primary-400 font-medium text-sm">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm">
                  {cert.date}
                </p>
              </div>
              
              {/* View Certificate Button */}
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/30 hover:border-primary-500/50 text-primary-300 hover:text-primary-200 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                View Certificate
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;