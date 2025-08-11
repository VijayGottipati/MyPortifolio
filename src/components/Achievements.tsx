import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import SectionHeader from './SectionHeader';

const Achievements = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Achievements"
        title="Recognition & Awards"
        description="Highlights of my accomplishments and recognitions"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-primary-500/30 transition-colors duration-200"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
              <span className="text-primary-400 text-sm font-bold">🏆</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">
                {achievement.title}
              </h3>
              {achievement.description && (
                <p className="text-gray-400 text-sm mb-2">
                  {achievement.description}
                </p>
              )}
              {achievement.year && (
                <span className="text-primary-400 text-xs font-medium">
                  {achievement.year}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements; 