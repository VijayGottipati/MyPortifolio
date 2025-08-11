import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Tools = () => {
  const toolCategories = [
    {
      name: 'Programming Languages',
      tools: ['Java', 'C', 'Python', 'JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Databases & Analytics',
      tools: ['SQL', 'MySQL', 'Hadoop', 'PowerBI', 'Advanced Excel']
    },
    {
      name: 'Frameworks & Tools',
      tools: ['React', 'Android Studio', 'Azure']
    },
    {
      name: 'Languages',
      tools: ['English (Fluent)', 'Telugu (Native)', 'Hindi (Fluent)']
    }
  ];

  return (
    <div>
      <SectionHeader
        eyebrow="Tools & Technologies"
        title="Tech Stack"
        description="Technologies and tools I work with"
      />
      
      <div className="space-y-8">
        {toolCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.tools.map((tool, toolIndex) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-200"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tools; 