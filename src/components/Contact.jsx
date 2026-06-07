import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { TextReveal } from "../animations/TextReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary/50 to-dark-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <TextReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-medium mb-4">
              تواصل معنا
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="gradient-text">تواصل</span> مع طلة
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              نحن هنا لخدمتك على مدار الساعة
            </p>
          </div>
        </TextReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <TextReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="tel:01154930626"
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-dark-card border border-dark-border hover:border-neon-blue/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-3">
                    <FaPhoneAlt className="text-neon-blue text-lg" />
                  </div>
                  <h4 className="font-bold text-white mb-1">اتصل بنا</h4>
                  <p className="text-gray-400 text-sm">01154930626</p>
                </motion.a>

                <motion.a
                  href="https://wa.me/201154930626"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-dark-card border border-dark-border hover:border-green-500/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-3">
                    <FaWhatsapp className="text-green-400 text-lg" />
                  </div>
                  <h4 className="font-bold text-white mb-1">واتساب</h4>
                  <p className="text-gray-400 text-sm">01154930626</p>
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/share/1HQjTtszfe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-dark-card border border-dark-border hover:border-blue-500/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">
                    <FaFacebookF className="text-blue-400 text-lg" />
                  </div>
                  <h4 className="font-bold text-white mb-1">فيسبوك</h4>
                  <p className="text-gray-400 text-sm">Tallah Restaurant</p>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/cafe_tallah?igsh=MXU2a2cza2p1eWg5cQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-dark-card border border-dark-border hover:border-pink-500/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-3">
                    <FaInstagram className="text-pink-400 text-lg" />
                  </div>
                  <h4 className="font-bold text-white mb-1">انستجرام</h4>
                  <p className="text-gray-400 text-sm">@cafe_tallah</p>
                </motion.a>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-dark-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d31.235!3d30.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQyLjAiTiAzMcKwMTQnMDYuMCJF!5e0!3m2!1sar!2seg!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tallah Location"
                />
              </div>
              <motion.a
                href="https://maps.app.goo.gl/A8zJVdbgF3ph4Ju16?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-blue/10 text-neon-blue border border-neon-blue/30 font-medium hover:bg-neon-blue/20 transition-all duration-300"
              >
                <FaMapMarkerAlt />
                <span>Open Location in Google Maps</span>
              </motion.a>
            </TextReveal>
          </div>

          <TextReveal delay={0.3}>
            <div className="p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border">
              <h3 className="text-xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="الاسم"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all"
                  />
                </div>
                <div className="p-4 rounded-xl bg-dark-bg border border-dark-border flex items-center gap-3">
                  <FaPhoneAlt className="text-neon-blue text-lg flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs">اتصل بنا مباشرة</p>
                    <a href="tel:01154930626" className="text-white font-bold hover:text-neon-blue transition-colors">
                      01154930626
                    </a>
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="رسالتك..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-blue text-black font-bold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
                >
                  {sent ? (
                    "تم الإرسال ✓"
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>إرسال</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
