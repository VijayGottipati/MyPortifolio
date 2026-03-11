import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaCloud, FaDatabase } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Tools = () => {
  const toolCategories = [
    {
      name: 'Programming Languages & Frameworks',
      icon: <FaCode className="w-6 h-6" />,
      tools: ['Python', 'SQL', 'C++', 'JavaScript', 'React', 'Node.js', 'Typescript', 'React-native', 'Django', 'FastAPI'],
      color: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/40',
      iconColor: 'text-blue-400',
      glowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]'
    },
    {
      name: 'ML/AI Frameworks',
      icon: <FaRobot className="w-6 h-6" />,
      tools: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Spark', 'Polars', 'HuggingFace', 'Langchain', 'LangGraph'],
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/40',
      iconColor: 'text-purple-400',
      glowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]'
    },
    {
      name: 'MLOps & Cloud',
      icon: <FaCloud className="w-6 h-6" />,
      tools: ['AWS', 'GCP', 'Databricks', 'Docker', 'Kubernetes', 'MLflow', 'Github Actions', 'Opik'],
      color: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/20',
      hoverBorder: 'hover:border-orange-500/40',
      iconColor: 'text-orange-400',
      glowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]'
    },
    {
      name: 'Databases & Tools',
      icon: <FaDatabase className="w-6 h-6" />,
      tools: ['MongoDB', 'PostgreSQL', 'BigQuery', 'Redis', 'Git', 'CUDA', 'Kafka', 'FastMCP', 'vLLM'],
      color: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/20',
      hoverBorder: 'hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
      glowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]'
    }
  ];

  return (
    <div>
      <SectionHeader
        eyebrow="Tools & Technologies"
        title="Tech Stack"
        description="Technologies and tools I work with"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {toolCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} ${category.hoverBorder} ${category.glowColor} backdrop-blur-sm transition-all duration-300 group`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-gray-900/80 border ${category.borderColor} ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {category.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.tools.map((tool, toolIndex) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                  className="px-3 py-1.5 bg-gray-900/80 border border-gray-700/50 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-800 transition-all duration-200 cursor-default"
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