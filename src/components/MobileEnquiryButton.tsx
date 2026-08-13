import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      {/* Mobile bottom enquiry button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-[#030306]/95 backdrop-blur-xl border-t border-[#ffc107]/20" />
        
        <div className="relative px-4 py-2 flex items-center gap-3">
          {/* Only Enquiry Button - Removed Call and WhatsApp buttons */}
          <motion.button
            onClick={() => setShowEnquiry(true)}
            whileTap={{ scale: 0.98 }}
            className="w-full h-10 rounded-xl bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(255,193,7,0.5)] transition-all duration-300 text-sm"
          >
            Enquire Now
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </motion.button>
        </div>
      </motion.div>

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
};

export default MobileEnquiryButton;