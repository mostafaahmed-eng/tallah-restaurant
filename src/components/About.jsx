import { motion } from "framer-motion";
import { FaLeaf, FaTruck, FaStar, FaHeart } from "react-icons/fa";
import { TextReveal, FadeIn } from "../animations/TextReveal";
import { useLanguage } from "../context/LanguageContext";

const icons = [FaLeaf, FaTruck, FaStar, FaHeart];

export default function About() {
  const { t } = useLanguage();
  const features = t("about.features");

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary/50 to-dark-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <TextReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-medium mb-4">
              {t("about.badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t("about.title")}
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("about.desc")}
            </p>
          </div>
        </TextReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80"
                    alt="Tallah Interior"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                    alt="Tallah Food"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80"
                    alt="Tallah Ambiance"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80"
                    alt="Tallah Cafe"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <TextReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-neon-blue/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-4">
                    {(() => { const Icon = icons[i]; return <Icon className="text-neon-blue text-xl" />; })()}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              </TextReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
