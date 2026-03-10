import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Tools = () => {
  const toolCategories = [
    {
      name: 'Programming Languages & Frameworks',
      tools: ['Python', 'SQL', 'C++', 'JavaScript', 'React', 'Node.js', 'Typescript', 'React-native', 'Django', 'FastAPI']
    },
    {
      name: 'ML/AI Frameworks',
      tools: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Spark', 'Polars', 'HuggingFace', 'Langchain', 'LangGraph']
    },
    {
      name: 'MLOps & Cloud',
      tools: ['AWS', 'GCP', 'Databricks', 'Docker', 'Kubernetes', 'MLflow', 'Github Actions', 'Opik']
    },
    {
      name: 'Databases & Tools',
      tools: ['MongoDB', 'PostgreSQL', 'BigQuery', 'Redis', 'Git', 'CUDA', 'Kafka', 'FastMCP', 'vLLM']
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