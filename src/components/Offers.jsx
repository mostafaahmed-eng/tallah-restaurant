import { useState } from "react";
import { motion } from "framer-motion";
import { FaTag, FaClock, FaArrowLeft } from "react-icons/fa";
import { offersData } from "../data/offersData";
import { TextReveal, StaggerContainer, StaggerItem } from "../animations/TextReveal";

export default function Offers() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % offersData.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + offersData.length) % offersData.length);

  return (
    <section id="offers" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary/30 to-dark-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <TextReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-4">
              🔥 عروض حصرية
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="gradient-text">عروض</span> وخصومات طلة
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              عروض لا تقاوم على أشهى الأطباق. اطلب الآن واستفد من الخصم
            </p>
          </div>
        </TextReveal>

        <div className="hidden lg:grid grid-cols-3 gap-6">
          <StaggerContainer>
            {offersData.map((offer) => (
              <StaggerItem key={offer.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl overflow-hidden bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-gold text-black font-bold text-sm">
                      خصم {offer.discount}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {offer.description}
                    </p>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gray-500 line-through text-sm">
                        {offer.oldPrice} ج.م
                      </span>
                      <span className="text-2xl font-black gradient-text">
                        {offer.newPrice} <span className="text-sm">ج.م</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <FaClock />
                        حتى {new Date(offer.validUntil).toLocaleDateString("ar-EG")}
                      </span>
                      <a
                        href="https://wa.me/201234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-blue text-sm font-medium hover:underline"
                      >
                        اطلب الآن
                      </a>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border">
            <div className="relative h-56 overflow-hidden">
              <img
                src={offersData[activeIndex].image}
                alt={offersData[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-gold text-black font-bold text-sm">
                خصم {offersData[activeIndex].discount}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                {offersData[activeIndex].title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {offersData[activeIndex].description}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-500 line-through text-sm">
                  {offersData[activeIndex].oldPrice} ج.م
                </span>
                <span className="text-2xl font-black gradient-text">
                  {offersData[activeIndex].newPrice} <span className="text-sm">ج.م</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <FaClock />
                  حتى{" "}
                  {new Date(offersData[activeIndex].validUntil).toLocaleDateString(
                    "ar-EG"
                  )}
                </span>
                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue text-sm font-medium hover:underline"
                >
                  اطلب الآن ←
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 pb-5">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-dark-border text-gray-400 hover:text-white transition-colors"
              >
                <FaArrowLeft className="rotate-180" />
              </button>
              <div className="flex gap-2">
                {offersData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-neon-blue w-6"
                        : "bg-dark-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full bg-dark-border text-gray-400 hover:text-white transition-colors"
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
