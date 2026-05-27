import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaWhatsapp, FaPizzaSlice } from "react-icons/fa";
import { TextReveal, FadeIn } from "../animations/TextReveal";

export default function Hero() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 10}s`,
      size: `${2 + Math.random() * 4}px`,
    })),
  []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />

      <div className="hero-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right order-2 lg:order-1">
            <FadeIn>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <FaPizzaSlice className="text-neon-blue text-sm" />
                <span className="text-neon-blue text-sm font-medium">
                  مطعم وكافيه طلة
                </span>
              </motion.div>
            </FadeIn>

            <TextReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                <span className="gradient-text">أفضل بيتزا وبرجر</span>
                <br />
                <span className="text-white">وفرايد تشيكن</span>
                <br />
                <span className="gradient-text">في المدينة</span>
              </h1>
            </TextReveal>

            <TextReveal delay={0.4}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                في طلة نقدم لك تجربة طعام فريدة. أشهى البيتزا، ألذ البرجر،
                وأطعم الفرايض تشيكن. طعام عالي الجودة، خدمة سريعة، وأجواء لا تُنسى.
              </p>
            </TextReveal>

            <TextReveal delay={0.6}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neon-blue text-black font-bold text-lg shadow-lg shadow-neon-blue/30 hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                >
                  <span>شاهد المنيو</span>
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-neon-blue/50 text-neon-blue font-bold text-lg hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>اطلب الآن</span>
                </motion.a>
              </div>
            </TextReveal>

            <TextReveal delay={0.8}>
              <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">50+</div>
                  <div className="text-gray-500 text-sm">صنف</div>
                </div>
                <div className="w-px h-12 bg-dark-border" />
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">1000+</div>
                  <div className="text-gray-500 text-sm">عميل سعيد</div>
                </div>
                <div className="w-px h-12 bg-dark-border" />
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">4.9</div>
                  <div className="text-gray-500 text-sm">تقييم</div>
                </div>
              </div>
            </TextReveal>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/20 to-transparent rounded-full blur-3xl" />
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-neon-blue/20 shadow-2xl shadow-neon-blue/20">
                    <img
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
                      alt="Tallah Food"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
                  </div>
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-dark-card border border-neon-blue/20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-center">
                      <div className="text-neon-blue text-2xl font-black">4.9</div>
                      <div className="text-yellow-400 text-xs">★★★★★</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
