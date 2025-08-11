import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import SectionHeader from './SectionHeader';
import Tag from './Tag';

const Experience = () => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div>
      <SectionHeader
        eyebrow="Experience"
        title="Work History"
        description="My professional experience and career journey"
      />

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors duration-200"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {exp.position}
                </h3>
                <p className="text-primary-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-400">
                  {exp.location}
                </p>
              </div>
              <div className="text-sm text-gray-400 lg:text-right">
                <p>
                  {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-primary-400 mr-2 mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 