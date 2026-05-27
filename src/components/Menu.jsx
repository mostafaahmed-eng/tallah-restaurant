import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { categories, menuItems } from "../data/menuData";
import { TextReveal, StaggerContainer, StaggerItem } from "../animations/TextReveal";

function MenuCard({ item }) {
  const { addItem } = useCart();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border hover:border-neon-blue/30 transition-all duration-500"
      >
        <div className="relative h-48 overflow-hidden">
          {!imgLoaded && (
            <div className="absolute inset-0 shimmer" />
          )}
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
          {item.popular && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-neon-blue text-black text-xs font-bold">
              الأكثر طلباً
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white">{item.name}</h3>
            <span className="flex items-center gap-1 text-yellow-400 text-sm">
              <FaStar />
              {item.rating}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black gradient-text">
              {item.price} <span className="text-sm">ج.م</span>
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addItem(item)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue hover:text-black font-medium transition-all duration-300 text-sm"
            >
              <FaShoppingCart />
              <span>أضف</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary/50 to-dark-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <TextReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-medium mb-4">
              قائمة الطعام
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="gradient-text">استكشف</span> منيو طلة
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              تشكيلة واسعة من أشهى الأطباق المعدة بأفضل المكونات الطازجة
            </p>
          </div>
        </TextReveal>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-neon-blue text-black shadow-lg shadow-neon-blue/30"
                : "bg-dark-card text-gray-400 border border-dark-border hover:border-neon-blue/30 hover:text-white"
            }`}
          >
            الكل
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-neon-blue text-black shadow-lg shadow-neon-blue/30"
                  : "bg-dark-card text-gray-400 border border-dark-border hover:border-neon-blue/30 hover:text-white"
              }`}
            >
              {cat.icon} {cat.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <StaggerContainer key={activeCategory}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </StaggerContainer>
        </AnimatePresence>
      </div>
    </section>
  );
}
