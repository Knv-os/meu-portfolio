import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactInfo } from "../../data/contactInfo";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as
        | string
        | undefined;
      if (!endpoint) {
        throw new Error(
          "Configuração ausente: defina VITE_FORMSPREE_ENDPOINT no .env .(ex.: https://formspree.io/f/SEU_ID)"
        );
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Novo contato pelo portfólio",
        }),
      });

      const data = await res.json();
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Falha ao enviar mensagem.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err?.message || "Falha ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <section id="contact" className="py-20 relative">
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
            Entre em Contato
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Tem um projeto em mente ou quer conversar? Adoraria ouvir de você.
            Vamos criar algo incrível juntos!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 punk-title-metal">
                Vamos nos conectar
              </h3>
              <p className="text-gray-300 mb-8">
                Estou sempre aberto para discutir novas oportunidades, ideias
                criativas ou potenciais colaborações. Sinta-se à vontade para
                entrar em contato através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="punk-border p-3 hover:bg-white hover:text-black transition-all duration-200 group">
                    <info.icon
                      size={24}
                      className=" transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <h4 className=" font-medium">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-3 text-white">
                Resposta rápida
              </h4>
              <p className="text-gray-400 text-sm">
                Normalmente respondo em até 24 horas. Para assuntos urgentes,
                fale comigo por telefone ou no LinkedIn.
              </p>
              {status === "success" && (
                <p
                  className="mt-4 text-sm text-green-400"
                  role="status"
                  aria-live="polite"
                >
                  Mensagem enviada com sucesso.
                </p>
              )}
              {status === "error" && (
                <p
                  className="mt-4 text-sm text-red-400"
                  role="alert"
                  aria-live="assertive"
                >
                  {errorMessage}
                </p>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="punk-input"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="punk-input"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Conte sobre seu projeto ou diga um olá!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                disabled={loading}
                className={`punk-button w-full justify-center flex gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <span>{loading ? "Enviando..." : "Enviar mensagem"}</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
