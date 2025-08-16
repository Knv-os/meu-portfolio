import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

const Projects = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl punk-title-metal mb-4"
          >
            Projetos em Destaque
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Confira alguns projetos que demonstram meu foco em performance, UX e
            código limpo.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-effect rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black border border-white rounded text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ExternalLink size={14} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
