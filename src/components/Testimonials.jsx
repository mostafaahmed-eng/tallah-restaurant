import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { testimonialsData } from "../data/testimonialsData";
import { TextReveal, StaggerContainer, StaggerItem } from "../animations/TextReveal";

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={i < count ? "text-gold" : "text-gray-600"}
          size={14}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary/30 to-dark-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <TextReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-4">
              {t("testimonials.badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("testimonials.desc")}
            </p>
          </div>
        </TextReveal>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((t) => (
              <StaggerItem key={t.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/20 transition-all duration-500"
                >
                  <FaQuoteRight className="absolute top-4 left-4 text-2xl text-neon-blue/10" />
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full bg-dark-border"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                    <div className="mr-auto">
                      <Stars count={t.rating} />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{t.comment}"
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
