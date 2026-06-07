import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#menu", label: "المنيو" },
  { href: "#offers", label: "العروض" },
  { href: "#about", label: "نبذة عنا" },
  { href: "#testimonials", label: "التقييمات" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-secondary" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-black gradient-text">طلة</span>
              <span className="text-xs text-gray-500 font-light">Tallah</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              أفضل بيتزا وبرجر وفرايد تشيكن في القناطر الخيرية. طعام عالي الجودة، خدمة
              سريعة، وأجواء لا تُنسى.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.facebook.com/share/1HQjTtszfe/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/cafe_tallah?igsh=MXU2a2cza2p1eWg5cQ=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/30 transition-all"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://wa.me/201154930626"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">معلومات الاتصال</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:01154930626"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-blue text-sm transition-colors"
                >
                  <FaPhoneAlt className="text-neon-blue text-xs" />
                  01154930626
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201154930626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <FaWhatsapp className="text-green-400 text-xs" />
                  01154930626
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-neon-blue text-xs" />
                  <a
                    href="https://maps.app.goo.gl/A8zJVdbgF3ph4Ju16?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-blue transition-colors"
                  >
                    القناطر الخيرية، مصر
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">ساعات العمل</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>السبت - الخميس</span>
                <span className="text-neon-blue">١٢:٠٠ م - ١٢:٠٠ ص</span>
              </li>
              <li className="flex justify-between">
                <span>الجمعة</span>
                <span className="text-neon-blue">١:٠٠ م - ١٢:٠٠ ص</span>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-xl bg-dark-card border border-dark-border">
              <p className="text-gray-500 text-xs text-center mb-2">اطلب الآن عبر</p>
              <motion.a
                href="https://wa.me/201154930626"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block text-center px-4 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 font-medium text-sm hover:bg-green-500/20 transition-all"
              >
                <FaWhatsapp className="inline ml-1" />
                واتساب
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-border text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} مطعم وكافيه طلة - Tallah Restaurant & Cafe.
            جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
