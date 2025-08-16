import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>Feito com </span>
            <Coffee size={16} className="text-amber-500 animate-pulse" />
            <span>por Kevin</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Kevin. Todos direitos reservados.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
