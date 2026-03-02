import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const placements = [
  { name: "Anjali Sharma", location: "Varanasi", company: "Spyne.ai", role: "AI Artist" },
  { name: "Rahul Kumar", location: "Delhi", company: "DNEG", role: "VFX Artist" },
  { name: "Priya Singh", location: "Mumbai", company: "Google", role: "UI Designer" },
  { name: "Karan Verma", location: "Gurugram", company: "Framestore", role: "Compositor" },
  { name: "Sneha Patel", location: "Bengaluru", company: "Swiggy", role: "Motion Designer" },
  { name: "Vikram Sharma", location: "Varanasi", company: "Razorpay", role: "Product Designer" },
  { name: "Neha Agarwal", location: "Mumbai", company: "MPC", role: "3D Artist" },
];

const PlacementTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const showInterval = setInterval(() => {
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
        // Move to next placement
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % placements.length);
        }, 500);
      }, 5000);
    }, 8000);

    // Show first one immediately
    setTimeout(() => setIsVisible(true), 2000);

    return () => clearInterval(showInterval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const placement = placements[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: -20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-40 max-w-xs"
        >
          <div className="relative bg-card/95 backdrop-blur-xl border border-[#ffc107]/20 rounded-2xl p-4 shadow-2xl hover:border-[#ffc107]/40 transition-colors duration-300">
            {/* Close button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-secondary transition-colors border border-[#ffc107]/30"
            >
              <X className="w-3 h-3 text-[#ffc107]" />
            </button>

            {/* Success icon with animation */}
            <div className="flex items-start gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-10 h-10 rounded-full bg-[#ffc107]/10 flex items-center justify-center flex-shrink-0 border border-[#ffc107]/20"
              >
                <CheckCircle className="w-5 h-5 text-[#ffc107]" />
              </motion.div>

              <div>
                <p className="text-sm font-medium">
                  <span className="font-bold">{placement.name}</span> from {placement.location}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  just got placed at <span className="font-semibold" style={{ color: '#ffc107' }}>{placement.company}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  as {placement.role}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ffc107] rounded-full origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlacementTicker;