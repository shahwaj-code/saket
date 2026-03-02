import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, HelpCircle, X } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

const StickyButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const buttons = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919910792123?text=Hi%2C%20I'm%20interested%20in%20CreativeTech%20Institute%20courses",
      color: "bg-[#25D366]",
      hoverColor: "hover:bg-[#1da851]",
    },
    {
      icon: Phone,
      label: "Call Now",
      href: "tel:+919910792123",
      color: "bg-gradient-to-r from-neon-purple to-neon-cyan",
      hoverColor: "hover:opacity-90",
    },
    {
      icon: HelpCircle,
      label: "Enquire Now",
      onClick: () => setShowEnquiry(true),
      color: "bg-gradient-to-r from-neon-purple to-neon-pink",
      hoverColor: "hover:opacity-90",
    },
  ];

  return (
    <>
      {/* Desktop Sticky Buttons */}
      <div className="fixed right-6 bottom-6 z-40 hidden md:flex flex-col gap-3">
        <AnimatePresence>
          {buttons.map((btn, index) => (
            <motion.div
              key={btn.label}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
            >
              {btn.href ? (
                <a
                  href={btn.href}
                  target={btn.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-full text-white font-medium shadow-lg transition-all duration-300 ${btn.color} ${btn.hoverColor} border border-transparent hover:border-[#ffc107]/50`}
                >
                  <btn.icon className="w-5 h-5" />
                  <span className="whitespace-nowrap">{btn.label}</span>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full ${btn.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                </a>
              ) : (
                <button
                  onClick={btn.onClick}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-full text-white font-medium shadow-lg transition-all duration-300 ${btn.color} ${btn.hoverColor} border border-transparent hover:border-[#ffc107]/50`}
                >
                  <btn.icon className="w-5 h-5" />
                  <span className="whitespace-nowrap">{btn.label}</span>
                  <div className={`absolute inset-0 rounded-full ${btn.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile FAB */}
      <div className="fixed right-3 sm:right-4 bottom-20 sm:bottom-4 z-40 md:hidden">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-14 sm:bottom-16 right-0 flex flex-col gap-2"
            >
              {buttons.map((btn, index) => (
                <motion.div
                  key={btn.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {btn.href ? (
                    <a
                      href={btn.href}
                      target={btn.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-sm font-medium shadow-lg ${btn.color} border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300`}
                    >
                      <btn.icon className="w-4 h-4" />
                      {btn.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        btn.onClick?.();
                        setIsExpanded(false);
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-sm font-medium shadow-lg ${btn.color} border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300`}
                    >
                      <btn.icon className="w-4 h-4" />
                      {btn.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-xl flex items-center justify-center border-2 border-transparent hover:border-[#ffc107]/50 transition-colors duration-300"
          animate={{ rotate: isExpanded ? 45 : 0 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc107]" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc107]" />}
        </motion.button>
      </div>

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
};

export default StickyButtons;