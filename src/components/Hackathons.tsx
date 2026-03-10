import { motion } from 'framer-motion';
import { FaTrophy, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { hackathons } from '../data/hackathons';
import SectionHeader from './SectionHeader';
import Tag from './Tag';

const Hackathons = () => {
    return (
        <div>
            <SectionHeader
                eyebrow="Competitions"
                title="Hackathons"
                description="Competitive programming and innovation challenges"
            />

            <div className="space-y-8">
                {hackathons.map((hackathon, index) => (
                    <motion.div
                        key={hackathon.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-gray-800/30 border border-gray-700 hover:border-primary-500/50 rounded-xl p-6 transition-all duration-300"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:via-primary-500/5 group-hover:to-accent-500/5 rounded-xl transition-all duration-500" />

                        <div className="relative">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                        {hackathon.title}
                                    </h3>
                                    <div className="text-lg text-primary-300 font-medium mt-1 inline-flex items-center gap-2">
                                        <FaTrophy className="text-accent-400" />
                                        {hackathon.placement} - {hackathon.hackathonName}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <FaCalendar className="text-primary-500" />
                                        {hackathon.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-accent-500" />
                                        {hackathon.location}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {hackathon.description.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="text-gray-300 flex items-start gap-3"
                                    >
                                        <span className="text-primary-500 mt-1.5 min-w-[6px]">▸</span>
                                        <span className="leading-relaxed">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {hackathon.technologies.map(tech => (
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

export default Hackathons;
