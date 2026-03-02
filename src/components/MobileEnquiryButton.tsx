import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import EnquiryModal from "./EnquiryModal";

const MobileEnquiryButton = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 100vh)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Fixed Bottom Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      >
        {/* Glassmorphic background */}
        <div className="absolute inset-0 bg-[#030306]/80 backdrop-blur-xl border-t border-white/10" />
        
        <div className="relative px-4 py-3 flex items-center gap-3">
          {/* Call Button */}
          <motion.a
            href="tel:+919876543210"
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"
          >
            <Phone className="w-5 h-5 text-neon-cyan" />
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 text-neon-green" />
          </motion.a>

          {/* Enquire Now Button */}
          <motion.button
            onClick={() => setShowEnquiry(true)}
            whileTap={{ scale: 0.98 }}
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold flex items-center justify-center gap-2 shadow-neon"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
};

export default MobileEnquiryButton;