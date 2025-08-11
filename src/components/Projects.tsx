import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { PROJECT_CATEGORIES } from '../utils/constants';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      <SectionHeader
        eyebrow="Projects"
        title="Featured Work"
        description="A collection of my recent projects showcasing various technologies and skills"
      />

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['All', ...PROJECT_CATEGORIES].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Projects; 