import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../utils/types';
import Tag from './Tag';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-primary-500/50 transition-all duration-200"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-500/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl">📁</span>
          </div>
          <p className="text-gray-400 text-sm">Project Image</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-white hover:text-primary-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3 pt-2">
          <motion.a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/30 hover:border-primary-500/50 text-primary-300 hover:text-primary-200 rounded-lg transition-all duration-200 text-sm font-medium"
          >
            <FaGithub className="w-4 h-4" />
            Source Code
          </motion.a>

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-accent-500/20 hover:bg-accent-500/30 border border-accent-500/30 hover:border-accent-500/50 text-accent-300 hover:text-accent-200 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 