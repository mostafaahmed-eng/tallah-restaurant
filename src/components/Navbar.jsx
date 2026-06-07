import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useScrollPosition } from "../hooks/useScrollPosition";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#menu", label: "المنيو" },
  { href: "#offers", label: "العروض" },
  { href: "#about", label: "نبذة عنا" },
  { href: "#testimonials", label: "التقييمات" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar({ onCartOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isScrolled } = useScrollPosition();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong shadow-lg shadow-neon-blue/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartOpen}
              className="relative p-2 text-neon-blue hover:text-neon-blue-light transition-colors"
            >
              <FaShoppingCart className="text-xl" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-neon-blue neon-text bg-neon-blue/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a href="#home" className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-black gradient-text tracking-tight">
                طلة
              </span>
              <span className="hidden sm:block text-xs text-gray-500 font-light">
                Tallah
              </span>
            </a>

            <div className="flex items-center gap-3">
              <motion.a
                href="tel:01154930626"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 transition-all duration-300 text-sm font-medium"
              >
                <FaPhoneAlt className="text-xs" />
                <span>اتصل بنا</span>
              </motion.a>

              <motion.a
                href="https://wa.me/201154930626"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-5 py-2 rounded-lg bg-neon-blue text-black font-bold text-sm hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
              >
                اطلب الآن
              </motion.a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-white hover:text-neon-blue transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 bottom-0 left-0 w-72 bg-dark-secondary border-l border-dark-border p-6 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? "text-neon-blue bg-neon-blue/10 neon-text"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-6 border-t border-dark-border pt-6 flex flex-col gap-3">
                  <a
                    href="tel:01154930626"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 font-medium"
                  >
                    <FaPhoneAlt />
                    <span>اتصل بنا</span>
                  </a>
                  <a
                    href="https://wa.me/201154930626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-3 rounded-lg bg-neon-blue text-black font-bold"
                  >
                    اطلب الآن
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
