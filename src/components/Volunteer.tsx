import { motion } from 'framer-motion';
import { volunteer } from '../data/volunteer';
import SectionHeader from './SectionHeader';

const Volunteer = () => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div>
      <SectionHeader
        eyebrow="Volunteer Experience"
        title="Community Service"
        description="Contributing to society through volunteer work and community initiatives"
      />
      
      <div className="space-y-8">
        {volunteer.map((vol, index) => (
          <motion.div
            key={vol.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors duration-200"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {vol.role}
                </h3>
                <p className="text-primary-400 font-medium mb-2">
                  {vol.organization}
                </p>
                <p className="text-sm text-gray-400">
                  {vol.location}
                </p>
              </div>
              <div className="text-sm text-gray-400 lg:text-right">
                <p>
                  {formatDate(vol.startDate)} - {formatDate(vol.endDate)}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <ul className="space-y-2">
                {vol.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-primary-400 mr-2 mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
