import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import { aboutTechs } from "../../data/aboutTechs";

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative">
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
            Sobre Mim
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white max-w-3xl mx-auto"
          >
            Desenvolvedor Full Stack com mais de 3 anos de experiência criando
            soluções digitais que unem design e funcionalidade, entregando
            interfaces rápidas, intuitivas e de alto desempenho.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-black border-2 border-white flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-200">
                <skill.icon
                  size={24}
                  className="text-white group-hover:text-black transition-colors duration-200"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {skill.title}
              </h3>
              <p className="text-white text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-8 rounded-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 punk-text">
                Minha Jornada
              </h3>
              <p className="text-white mb-4">
                Iniciei minha trajetória em outubro de 2022 na LOG Nature como
                estagiário, atuando na manutenção de sistemas legados em
                PHP/WooCommerce. Essa fase me trouxe vivência com código em
                produção, correções responsáveis e leitura de arquiteturas já
                estabelecidas, sempre priorizando estabilidade e qualidade.
              </p>
              <p className="text-white mb-4">
                Fui promovido a Analista de Sistemas Júnior e passei a atuar na
                construção e evolução de aplicações com foco em frontend
                moderno: React, TypeScript, Material UI, React Hook Form, Redux,
                Tailwind CSS e Framer Motion, sempre aplicando princípios SOLID
                e boas práticas. No backend, utilizei Node.js para
                desenvolvimento e integração de APIs robustas.
              </p>
              <p className="text-white mb-6">
                Também liderei integrações e personalizações de plataformas
                (Ghost.js, Nuvemshop), cuidei de infraestrutura na AWS (EC2,
                S3), pipelines de CI/CD e deploys. Participei do planejamento de
                sprints e mentoria do time. Além do web, atuei no
                desenvolvimento do app e desktop com React Native e Electron.
                Destaque para o projeto Bionote, que utiliza IA para triagem de
                vídeos de câmeras trap — desenvolvi o frontend do site oficial e
                contribuí para o ecossistema do produto.
              </p>
            </div>
            <div className="relative flex flex-col  items-center justify-center gap-4">
              <div className="w-full h-64 bg-black border-2 border-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold punk-text mb-2">3+</div>
                  <div className="text-white">Anos de Experiência</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 align-center justify-center">
                {aboutTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-black border border-white rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
