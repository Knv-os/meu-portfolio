import { motion } from "framer-motion";
import { ArrowDown, Eye } from "lucide-react";
import { socialLinks } from "../../data/socialLinks";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container-max section-padding text-center mx-auto bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl punk-title-metal"
          >
            [ Kevin_Dev ]
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl punk-title-metal mb-8"
          >
            Desenvolvedor Full Stack
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-white max-w-2xl mx-auto font-mono"
          >
            Desenvolvedor Full Stack com experiência em Node.js, TypeScript,
            React e AWS. Crio interfaces rápidas, acessíveis e escaláveis,
            unindo código limpo, design consistente e atitude para entregar
            impacto real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="#projects"
              rel="noopener noreferrer"
              className="punk-button hover:bg-white hover:text-black inline-flex items-center justify-center gap-2 mx-auto"
            >
              <Eye size={20} />
              <span className="">Ver todos os projetos</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="punk-border p-3 hover:bg-white hover:text-black transition-all duration-200 group"
                aria-label={link.label}
              >
                <link.icon
                  size={24}
                  className="text-white group-hover:text-black transition-colors duration-200"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute justify-center w-full flex items-center bottom-8  transform p-2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
