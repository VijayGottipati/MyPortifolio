import { motion } from 'framer-motion';
import { education } from '../data/education';
import SectionHeader from './SectionHeader';

const Education = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Education"
        title="Academic Journey"
        description="My educational background and academic achievements"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors duration-200"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {edu.institution}
                </h3>
                <p className="text-primary-400 font-medium">
                  {edu.degree} in {edu.field}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{edu.startYear} - {edu.endYear}</span>
                <span>{edu.location}</span>
              </div>
              
              {edu.feedbackBy && (
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    <span className="text-primary-400">Feedback by:</span> {edu.feedbackBy}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education; 