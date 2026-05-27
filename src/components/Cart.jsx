import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiPlus, HiMinus } from "react-icons/hi";
import { FaTrash, FaShoppingBag, FaWhatsapp } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Cart({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();

  const whatsappMessage = encodeURIComponent(
    `طلب جديد من طلة:\n${cart
      .map((item) => `- ${item.name} x${item.quantity} = ${item.price * item.quantity} ج.م`)
      .join("\n")}\n\nالإجمالي: ${totalPrice} ج.م`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 bottom-0 left-0 w-full sm:w-96 bg-dark-secondary border-l border-dark-border z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-dark-border">
              <div className="flex items-center gap-3">
                <FaShoppingBag className="text-neon-blue text-xl" />
                <h2 className="text-lg font-bold text-white">سلة المشتريات</h2>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <HiOutlineX className="text-xl" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <FaShoppingBag className="text-6xl text-gray-600 mb-4" />
                  <p className="text-gray-400 text-lg mb-2">السلة فارغة</p>
                  <p className="text-gray-600 text-sm">أضف بعض الأطباق اللذيذة</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-3 p-3 rounded-xl bg-dark-card border border-dark-border"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-neon-blue font-bold text-sm mt-1">
                          {item.price} ج.م
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 rounded-md bg-dark-border text-gray-400 hover:text-white transition-colors"
                          >
                            <HiMinus className="text-xs" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 rounded-md bg-dark-border text-gray-400 hover:text-white transition-colors"
                          >
                            <HiPlus className="text-xs" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <FaTrash className="text-xs" />
                        </button>
                        <span className="text-sm font-bold text-white">
                          {item.price * item.quantity} ج.م
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-dark-border p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">الإجمالي</span>
                  <span className="text-2xl font-black gradient-text">
                    {totalPrice} <span className="text-sm">ج.م</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={clearCart}
                    className="flex-1 px-4 py-3 rounded-xl border border-dark-border text-gray-400 hover:text-red-400 hover:border-red-400/30 transition-all duration-300 text-sm font-medium"
                  >
                    تفريغ
                  </button>
                  <motion.a
                    href={`https://wa.me/201234567890?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neon-blue text-black font-bold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>إرسال الطلب</span>
                  </motion.a>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
